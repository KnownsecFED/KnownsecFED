webpackJsonp([0x8f0662ea3935],{505:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-06-react-higher-order-component/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-e40385dad6404c53aab038d08436786f-dd4dc.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABBAX/2gAMAwEAAhADEAAAAdk0TVmvECf/xAAZEAACAwEAAAAAAAAAAAAAAAAAARARITH/2gAIAQEAAQUCMLQ+R//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aar/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGI/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAQAGPwI1T//EABoQAAICAwAAAAAAAAAAAAAAAAAhAREgMfD/2gAIAQEAAT8hVOTlIzeF/9oADAMBAAIAAwAAABC8/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QQZH/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/EBWp/8QAGhABAQACAwAAAAAAAAAAAAAAAREAIRAxQf/aAAgBAQABPxCAIGw3kRSUu4cQRLPcAqnRz//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-e40385dad6404c53aab038d08436786f-d6978.jpeg"\n        srcset="/static/header-e40385dad6404c53aab038d08436786f-527f0.jpeg 300w,\n/static/header-e40385dad6404c53aab038d08436786f-9a7cd.jpeg 600w,\n/static/header-e40385dad6404c53aab038d08436786f-d6978.jpeg 1200w,\n/static/header-e40385dad6404c53aab038d08436786f-fee16.jpeg 1800w,\n/static/header-e40385dad6404c53aab038d08436786f-dd4dc.jpeg 1920w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h2>高阶组件的定义</h2>\n<p>HoC 不属于 React 的 API，它是一种实现模式，本质上是一个函数，接受一个或多个 React 组件作为参数，返回一个全新的 React 组件，而不是改造现有的组件，这样的组件被称为高阶组件。开发过程中，有的功能需要在多个组件类复用时，这时可以创建一个 Hoc。</p>\n<h2>基本用法</h2>\n<ul>\n<li>包裹方式</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">HoC</span> <span class="token operator">=</span> <span class="token punctuation">(</span>WrappendComponent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">WrappingComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>WrappendComponent <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> WrappingComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>上述代码中，接受 WrappendComponent 作为参数，此参数就是将要被 HoC 包装的普通组件，在 render 中包裹一个 div，赋予它 <code>className</code> 属性，最终产生的 WrappingComponent 和 传入的 WrappendComponent 是两个完全不同的组件。</p>\n<p>在 WrappingComponent 中，可以读取、添加、编辑、删除传给 WrappendComponent 的 <code>props</code>，也可以用其它元素包裹 WrappendComponent，用来实现封装样式、添加布局或其它操作。</p>\n<ul>\n<li>组合方式</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">HoC</span> <span class="token operator">=</span> <span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">,</span> LoginView<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">WrappingComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>  \n        <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token operator">&lt;</span>LoginView <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> WrappingComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>上述代码中有两个组件，WrappedComponent 和 LoginView，如果传入的 <code>props</code> 中存在 <code>user</code>，则正常显示的 WrappedComponent 组件，否则显示 LoginView 组件，让用户去登录。HoC 传递的参数可以为多个，传递多个组件定制新组件的行为，例如用户登录状态下显示主页面，未登录显示登录界面；在渲染列表时，传入 List 和 Loading 组件，为新组件添加加载中的行为。</p>\n<ul>\n<li>继承方式</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">HoC</span> <span class="token operator">=</span> <span class="token punctuation">(</span>WrappendComponent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">WrappingComponent</span> <span class="token keyword">extends</span> <span class="token class-name">WrappendComponent</span> <span class="token punctuation">{</span>\n        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>\n            <span class="token keyword">const</span> <span class="token punctuation">{</span>user<span class="token punctuation">,</span> <span class="token operator">...</span>otherProps<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> otherProps<span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> WrappingComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>WrappingComponent 是一个新组件，它继承自 WrappendComponent，共享父级的函数和属性。可以使用 super.render() 或者 super.componentWillUpdate() 调用父级的生命周期函数，但是这样会让两个组件耦合在一起，降低组件的复用性。</p>\n<p>React 中对组件的封装是按照最小可用单元的思想来进行封装的，理想情况下，一个组件只做一件事情，符合 <code>OOP</code> 中的单一职责原则。如果需要对组件的功能增强，通过组合的方式或者添加代码的方式对组件进行增强，而不是修改原有的代码。</p>\n<h2>注意事项</h2>\n<ul>\n<li>不要在 render 函数中使用高阶组件</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 每一次render函数调用都会创建一个新的EnhancedComponent实例</span>\n  <span class="token comment">// EnhancedComponent1 !== EnhancedComponent2</span>\n  <span class="token keyword">const</span> EnhancedComponent <span class="token operator">=</span> <span class="token function">enhance</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 每一次都会使子对象树完全被卸载或移除</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>EnhancedComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React 中的 <code>diff</code> 算法会比较新旧子对象树，确定是否更新现有的子对象树或丢掉现有的子树并重新挂载。</p>\n<ul>\n<li>必须将静态方法做拷贝</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// 定义静态方法</span>\nWrappedComponent<span class="token punctuation">.</span><span class="token function-variable function">staticMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>\n<span class="token comment">// 使用高阶组件</span>\n<span class="token keyword">const</span> EnhancedComponent <span class="token operator">=</span> <span class="token function">enhance</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 增强型组件没有静态方法</span>\n<span class="token keyword">typeof</span> EnhancedComponent<span class="token punctuation">.</span>staticMethod <span class="token operator">===</span> <span class="token string">\'undefined\'</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<ul>\n<li>Refs属性不能传递</li>\n</ul>\n<p>HoC中指定的 <code>ref</code>，并不会传递到子组件，需要通过回调函数使用 <code>props</code> 传递。</p>\n<h2>参考链接</h2>\n<ul>\n<li><a href="https://leozdgao.me/chushi-hoc/">初识React中的High Order Component</a></li>\n<li><a href="https://doc.react-china.org/docs/higher-order-components.html">高阶组件</a></li>\n</ul>',fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍",date:"2018-01-06",catalog:"前端",author:"ielapp"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-06-react-higher-order-component/"}}}});
//# sourceMappingURL=path---2018-01-06-react-higher-order-component-78e7579dd16a8bb1e3dc.js.map