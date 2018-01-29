webpackJsonp([89025254229525],{502:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-05-create-a-redux-middleware/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAL/2gAMAwEAAhADEAAAAUN15WaKi6//xAAbEAACAQUAAAAAAAAAAAAAAAABEQACAxAiQv/aAAgBAQABBQJBU7BTm3j/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAx/9oACAECAQE/AQq//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETGR/9oACAEBAAY/Arp9NNQhx//EABsQAAICAwEAAAAAAAAAAAAAAAERABAxUXHw/9oACAEBAAE/ISFQ9eCK1B2oTLOn/9oADAMBAAIAAwAAABBTP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EGz/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/ECkDV//EABwQAQACAgMBAAAAAAAAAAAAAAEAETHhEEGR0f/aAAgBAQABPxA+ockNPVwx3eETmU3PyMmqmo3x4//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg"\n        srcset="/static/header-183a07e70356cec5d49e60258331449f-527f0.jpeg 300w,\n/static/header-183a07e70356cec5d49e60258331449f-9a7cd.jpeg 600w,\n/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>如何编写一个 Redux 中间件</h1>\n<p>要想实现一个 <a href="https://redux.js.org/">Redux</a> 中间件我们必须了解 Redux 的基本实现原理。本文将从 Redux 源码入手，重点讲解 applyMiddleware 如何将中间件串联执行。只有理解了底层原理我们才可以游刃有余的写出一个 Redux 中间件。</p>\n<h2>目录</h2>\n<ul>\n<li><a href="#createstore-%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB">createStore 源码解读</a></li>\n<li><a href="#applymiddleware-%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB">applyMiddleware 源码解读</a></li>\n<li><a href="#redux-thunk-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">redux-thunk 的实现原理</a></li>\n<li><a href="#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E4%B8%AD%E9%97%B4%E4%BB%B6">如何编写一个中间件</a></li>\n<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>\n</ul>\n<h2>createStore 源码解读</h2>\n<blockquote>\n<p><a href="https://redux.js.org/">Redux</a> 通过 createStore 来创建一个 store 对象</p>\n<p>要理解 applyMiddleware 的实现原理，我们要从 createStore 入手</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> preloadedState <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> enhancer <span class="token operator">===</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    enhancer <span class="token operator">=</span> preloadedState\n    preloadedState <span class="token operator">=</span> undefined\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Expected the enhancer to be a function.\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducer <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Expected the reducer to be a function.\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 篇幅有限，后面被我省略了，有兴趣请去看 Redux 源码</span>\n  <span class="token comment">// ......</span>\n</code></pre>\n      </div>\n<p>可以看见 createStore 的三个参数依次为: reducer，preloadedState，enhancer。参见源码，如果传入了 enhance 参数且为函数，则将 createStore 传入 enhance：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>也就是说，现在我们将用 enhance 来创建一个 store 对象。</p>\n<h2>applyMiddleware 源码解读</h2>\n<blockquote>\n<p>一般情况下 createStore 的第三个参数 enhance 就是 applyMiddleware</p>\n<p>applyMiddleware 的代码只有二十多行却是本文的重点</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token operator">...</span>middlewares<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>createStore<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span>\n    <span class="token keyword">var</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch\n    <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">var</span> middlewareAPI <span class="token operator">=</span> <span class="token punctuation">{</span>\n      getState<span class="token punctuation">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>\n      dispatch<span class="token punctuation">:</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    chain <span class="token operator">=</span> middlewares<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>middleware <span class="token operator">=></span> <span class="token function">middleware</span><span class="token punctuation">(</span>middlewareAPI<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    dispatch <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>chain<span class="token punctuation">)</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>store<span class="token punctuation">,</span>\n      dispatch\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>参见 createStore 的源码可以得知：applyMiddleware 依然使用 createStore 创建了store 对象并且返回，只是改写了这个对象的 dispatch 方法。</p>\n<p>下面我们重点来看这个被改写掉的 dispatch 方法，同时理解它和原生 dispatch 方法的区别也是本文的重点。为了更直观的了解这个过程我们先来看一个简单的中间件实现 logger middleware：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`dispatch: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>action<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>下面分两部详细探讨中间件的运行原理</p>\n<ol>\n<li>\n<p>将原生的 getState 和 dispacth 作为第一个参数传入中间件数组，获得执行完的 chain 数组；</p>\n<p><code>chain = middlewares.map(middleware => middleware(middlewareAPI))</code></p>\n</li>\n<li>\n<p>组合串联 middleware</p>\n<p><code>dispatch = compose(...chain)(store.dispatch)</code></p>\n<p>compose 将所有的中间件串联起来组成新的 dispatch</p>\n<p><strong>compose 源码</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>funcs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arg <span class="token operator">=></span> funcs<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>composed<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>composed<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>参考我们的 logger middleware 这里的 composed 即是我们的 next 参数。</p>\n<p>reduceRight 和 ruduce 一样，不过 reduceRight 是从数组的右端开始执行，arg 将作为 reduceRight 的初始值（这里就是 store.dispatch)。假设我们的 chain 数组为 <code>[f1, f2, f3]</code>执行完毕后 dispatch 为 <code>dispatch = f1(f2(f3(store.dispatch))))</code>，调用这个新的 dispatch 每个中间件就能依次执行了，这里的中间件执行过程也是类似于 Koa 的中间件执行的非常经典的洋葱模型。只有最后一个中间件会触发 <a href="https://redux.js.org/">redux</a> 原生的 dispatch，将这个 action 分发出去。</p>\n<p><strong>Redux middleware 洋葱模型</strong></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 911px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.1284302963776%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8ElEQVQoz62S2aqEQAxE/f//81Fwe1Bx3/dcTiCD3NlhhKJDOl2pVHTkx5/zruA8TzmOQ0G8bZvM8yz7vn9POI6jJEkiQRCI7/sSx7F4nieu60pRFN8RomiaJhmG4SG4o+YtIWOhDNhY67reiMgzNmTE5HjzlJACI0JF3/fqGTBlFi/LosTU3AjxJwxDiaJIvcqyTH3L81zSNJWqqvQhjwDNuq6TpmmkbVvNmZ8odaybjUOBdQUogpyF0JizrmslK8tSTwTAQ/O7kSGwUYhpQrH5ZfcW4y/nyy3bEiAh/j+FwXz8+D/EkyuZgdx1s9fvD4QOXNQpAGOZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="redux-middleware"\n        title=""\n        src="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png"\n        srcset="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-8d81b.png 300w,\n/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38503.png 600w,\n/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png 911w"\n        sizes="(max-width: 911px) 100vw, 911px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>只有在最后一个中间件中才调用了 store 原生的 dispatch。</strong></p>\n</li>\n</ol>\n<h2>redux-thunk 的实现原理</h2>\n<blockquote>\n<p>一般而言 dispatch 只能分发一个 action 对象，但是使用了 redux-thunk 中间件我们却可以分发一个异步函数。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">thunk</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">?</span>\n        <span class="token function">action</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">,</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">)</span> <span class="token punctuation">:</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>一个异步的 action 的示例</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function-variable function">getMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'xxx/xxx\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            type<span class="token punctuation">:</span> <span class="token string">\'GET_MESSAGE_SUCCESS\'</span><span class="token punctuation">,</span>\n            message<span class="token punctuation">:</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            type<span class="token punctuation">:</span> <span class="token string">\'GET_MESSAGE_ERROR\'</span><span class="token punctuation">,</span>\n            message<span class="token punctuation">:</span> <span class="token string">\'error\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这里的 dispatch 仍然是改造后的 dispatch。因为传入中间件的第一个参数 store（即 middlewareApi）中的 dispatch 是一个闭包，它保存着外层函数作用域中 dispatch 的引用，所以当 diapatch 被修改后，后面调用的 dispatch 都是这个新的 dispatch(即中间件的串联)，所以即使在异步 action 中调用 dispatch，中间件也会从头开始执行。</p>\n<h2>如何编写一个中间件</h2>\n<blockquote>\n<p>所以理解了以上，编写一个中间件将超级简单，只需要按照中间件编写规范</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function-variable function">myMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 在这里你可以拿到 store.getState 和 store.dispatch</span>\n    <span class="token comment">// 注意如果你调用 store.dispatch 中间件又从新从最外层开始 如果不加限制条件将陷入死循环</span>\n    <span class="token comment">// do something</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>   <span class="token comment">// 进入下一个中间件，最后一个中间件的 next 参数为 redux 原生 dispatch</span>\n    <span class="token comment">// 返回继续执行这个中间件剩余部分</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>总结</h2>\n<p>深入理解 Redux 中间件的实现原理，可以让我们在日常工作中，对 Redux 数据流向更加清晰和对自己的程序更加有把握。本人水平有限，如有错误还请指出。</p>\n<h3>参考资料</h3>\n<ul>\n<li><a href="http://www.ituring.com.cn/book/1898">《深入 Redux 技术栈》</a></li>\n<li><a href="https://redux.js.org/">Redux 官方文档</a></li>\n<li><a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html">阮一峰 Redux 入门教程</a></li>\n</ul>',fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件",date:"2018-01-05",catalog:"前端",author:"阿鑫"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-05-create-a-redux-middleware/"}}}});
//# sourceMappingURL=path---2018-01-05-create-a-redux-middleware-efe3012c8d303d10bdba.js.map