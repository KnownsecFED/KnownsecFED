webpackJsonp([0x75ae8ace7024],{551:function(n,s){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-28-fan-yi-react-zu-jian-mo-shi/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-41dac6053e9c1076378266f209aa4fc4-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHm5KSAv//EABgQAAIDAAAAAAAAAAAAAAAAAAECACAx/9oACAEBAAEFAkIouz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAVEAEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAQAGPwKr/8QAGBABAQADAAAAAAAAAAAAAAAAAREAICH/2gAIAQEAAT8hCOGXmv8A/9oADAMBAAIAAwAAABBbz//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAwEBPxAG5//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAgEBPxBcn//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQQTFxsf/aAAgBAQABPxBHLbe7GkhCmlhHD0/DR//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="【翻译】React 组件设计模式"\n        title=""\n        src="/static/header-41dac6053e9c1076378266f209aa4fc4-d6978.jpeg"\n        srcset="/static/header-41dac6053e9c1076378266f209aa4fc4-527f0.jpeg 300w,\n/static/header-41dac6053e9c1076378266f209aa4fc4-9a7cd.jpeg 600w,\n/static/header-41dac6053e9c1076378266f209aa4fc4-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>原文链接：<a href="https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82">React Component Patterns</a></p>\n<p>作者：<a href="https://levelup.gitconnected.com/@gmatheus">Gustavo Matheus</a></p>\n<p>随着 React 在前端开发中越来越流行，各种各样的设计模式及新概念亦层出不穷。本文旨在总结 React 开发中一些常见的设计模式。</p>\n<h2>有状态 (Stateful) vs 无状态 (stateless)</h2>\n<p>React 组件可以是有状态的，在其生命周期内可以操纵并改变其内部状态；React 组件也可以是无状态的，它仅接受来自父组件传入的 props，并进行展示。</p>\n<p>下面是一个<strong>无状态</strong>的 <code>Button</code> 组件，它的行为完全由传入的 props 决定：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> props <span class="token operator">=></span> \n  <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>下面是一个<strong>有状态</strong>组件(使用了上述的<strong>无状态</strong>组件):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ButtonCounter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> clicks<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicks<span class="token punctuation">:</span> <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clicks <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Button\n        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span>\n        text<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`You\'ve clicked me </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clicks<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times !`</span></span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>正如你所看到的，上述 <code>ButtonCounter</code> 组件在 <code>state</code> 中维护了自己的状态，而之前的 <code>Button</code> 组件仅根据 props 来进行渲染展示。这个区别看似很小，但是无状态的 <code>Button</code> 组件却高度可复用。</p>\n<h2>容器(Container) vs 展示(Presentational) 组件</h2>\n<p>当与外部数据进行交互时，我们可以把组件分为两类:</p>\n<ul>\n<li><strong>容器组件</strong>：主要负责同外部数据进行交互（通信），譬如与 <strong>Redux</strong> 等进行数据绑定等。</li>\n<li><strong>展示组件</strong>：根据自身 state 及接收自父组件的 props 做渲染，并不直接与外部数据源进行沟通。</li>\n</ul>\n<p>我们来看一个<strong>展示</strong>组件：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">UserList</span> <span class="token operator">=</span> props <span class="token operator">=></span>\n  <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>u <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>u<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span>u<span class="token punctuation">.</span>age<span class="token punctuation">}</span> years old<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>而这个<strong>展示</strong>组件可以被一个<strong>容器</strong>组件更新：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">UserListContainer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> users<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetchUsers</span><span class="token punctuation">(</span>users <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> users <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserList users<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>users<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>通过将组件区分为<strong>容器</strong>组件与<strong>展示</strong>组件，将数据获取与渲染进行分离。这也使 <code>UserList</code> 可复用。如果你想了解更多，这里有一些<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">非常好的文章</a>，解释地非常清楚。</p>\n<h2>高阶(Higher-Order)组件</h2>\n<p>当你想复用一个组件的逻辑时，高阶组件(HOC)就派上用场了。高阶组件就是 JavaScript 函数，接收 React 组件作为参数，并返回一个新组件。</p>\n<p>举个例子：编写一个菜单组件，当点击一个菜单项时，展开当前菜单项，显示子菜单。当然我们可以在父组件里来控制此菜单组件的状态，但是更优雅的方式，是使用高阶组件：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeToggleable</span><span class="token punctuation">(</span>Clickable<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>toggle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Clickable\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>\n            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>通过这种方式，我们可以使用 JavaScript 的装饰器语法，将我们的逻辑应用于 <code>ToggleableMenu</code> 组件:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>@makeToggleable\n<span class="token keyword">class</span> <span class="token class-name">ToggleableMenu</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>现在，我们可以将任何子菜单内容放入 <code>ToggleableMenu</code> 组件中：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Menu</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"First Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>Some content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"Second Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>Another content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"Third Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>More content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>当你在使用 <strong>Redux</strong> 的 <code>connect</code>，或者 <strong>React Router</strong> 的 <code>withRouter</code> 函数时，你就是在使用高阶组件！</p>\n<h2>渲染回调（Render Callbacks）</h2>\n<p>除了上述的高阶组件外，<strong>渲染回调</strong>是另一种使组件可复用的设计模式。<strong>渲染回调</strong>的核心是组件接收的子组件(或子结点，亦即 <code>props.children</code>)，不以 <code>React Component</code> 提供，而是以回调函数的形式提供。以上述 <strong>HOC</strong> 组件为例，我们通过<strong>渲染</strong>回调的方式重写如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Toggleable</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>toggle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> show<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>现在，我们可以传入回调函数给 <code>Toggleable</code> 组件作为子结点。 我们用新方式实现之前的 <strong>HOC</strong> 组件 <code>ToggleableMenu</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">ToggleableMenu</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Toggleable<span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span>show<span class="token punctuation">,</span> onClick<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span> show <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>children <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Toggleable<span class="token operator">></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>而我们全新的 <code>Menu</code> 组件实现如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Menu</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"First Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>Some content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"Second Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>Another content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ToggleableMenu title<span class="token operator">=</span><span class="token string">"Third Menu"</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>p<span class="token operator">></span>More content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleableMenu<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>是的，你没有看错，新的 <code>Menu</code> 组件同之前以<strong>HOC</strong>模式实现出来的一模一样！</p>\n<p>在这种实现方式下，我们将组件内部的状态(<code>state</code>)与组件的渲染逻辑进行剥离。在上面的例子中，我们将渲染逻辑放在了 <code>ToggleableMenu</code> 的<strong>渲染回调</strong>中，而展示组件的状态(<code>state</code>)依然在 <code>Toggleable</code> 组件内进行维护。</p>\n<h2>了解更多</h2>\n<p>以上的一些例子仅仅是 React 设计模式的基础知识。如果你想更加深入地了解关于 React 设计模式的话题，以下是一些非常好的学习资料，值得一看：</p>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=YaZg8wg39QQ">React Component Patterns by Michael Chan</a></li>\n<li><a href="https://github.com/chantastic/reactpatterns.com">React Patterns</a></li>\n<li><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentational and Container Components</a></li>\n<li><a href="https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e">React Higher Order Components in depth</a></li>\n<li><a href="https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9">Function as Child Components</a></li>\n<li><a href="https://github.com/acdlite/recompose">Recompose</a></li>\n<li><a href="https://github.com/paypal/downshift">Downshift</a></li>\n</ul>',fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础",date:"2018-01-28",catalog:"前端",author:"稀饭"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"
}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"}}}});
//# sourceMappingURL=path---2018-01-28-fan-yi-react-zu-jian-mo-shi-d1b414d5bd784a987e76.js.map