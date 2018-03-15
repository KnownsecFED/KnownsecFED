webpackJsonp([69481715157605],{546:function(e,n){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-7887fb67fd981d9697e7399d05cffa8d-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3klUtAX/xAAZEAACAwEAAAAAAAAAAAAAAAABEAARITH/2gAIAQEAAQUCqDUer//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABsQAQABBQEAAAAAAAAAAAAAAAEQABEhMYHx/9oACAEBAAE/IUPtHK4nY1T/AP/aAAwDAQACAAMAAAAQr8//xAAVEQEBAAAAAAAAAAAAAAAAAAAQYf/aAAgBAwEBPxCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFRgf/aAAgBAQABPxDMt+Ig0ZDqBRUTBXrDRP/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="如何扩展 Create React App 的 Webpack 配置"\n        title=""\n        src="/static/header-7887fb67fd981d9697e7399d05cffa8d-d6978.jpeg"\n        srcset="/static/header-7887fb67fd981d9697e7399d05cffa8d-527f0.jpeg 300w,\n/static/header-7887fb67fd981d9697e7399d05cffa8d-9a7cd.jpeg 600w,\n/static/header-7887fb67fd981d9697e7399d05cffa8d-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://github.com/facebookincubator/create-react-app">Create React App</a>（以下简称 CRA）是创建 React 应用的一个脚手架，它与其他脚手架不同的一个地方就是将一些复杂工具（比如 webpack）的配置封装了起来，让使用者不用关心这些工具的具体配置，从而降低了工具的使用难度。</p>\n<p>但是对于一些熟悉 webpack 的开发者来说，他们可能想对 webpack 配置做一些修改，这个时候应该怎么办呢？</p>\n<p>其实我们可以通过以下几种方式来修改 webpack 的配置：</p>\n<ul>\n<li>项目 eject</li>\n<li>替换 react-scripts 包</li>\n<li>使用 react-app-rewired</li>\n<li>scripts 包 + override 组合</li>\n</ul>\n<p>下面对这几种方式分别进行介绍。</p>\n<h2>项目 eject</h2>\n<p>使用 CRA 创建完项目以后，项目在<code>package.json</code>里面提供了这样一个命令：</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  ...\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"eject"</span><span class="token operator">:</span> <span class="token string">"react-scripts eject"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  ...\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>执行完这个命令——<code>yarn run eject</code>后会将封装在 CRA 中的配置全部<code>反编译</code>到当前项目，这样用户就可以完全取得 webpack 文件的控制权，想怎么修改就怎么修改了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code># eject 后项目根目录下会出现 config 文件夹，里面就包含了 webpack 配置\nconfig\n├── env.js\n├── jest\n│   ├── cssTransform.js\n│   └── fileTransform.js\n├── paths.js\n├── polyfills.js\n├── webpack.config.dev.js // 开发环境配置\n├── webpack.config.prod.js // 生产环境配置\n└── webpackDevServer.config.js</code></pre>\n      </div>\n<p>CRA 与其他脚手架不同的另一个地方，就是可以通过升级其中的<code>react-scripts</code>包来升级 CRA 的特性。比如用老版本 CRA 创建了一个项目，这个项目不具备 <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a> 功能，但只要项目升级了<code>react-scripts</code>包的版本就可以具备 PWA 的功能，项目本身的代码不需要做任何修改。</p>\n<p>但如果我们使用了<code>eject</code>命令，就再也享受不到 CRA 升级带来的好处了，因为<code>react-scripts</code>已经是以文件的形式存在于你的项目，而不是以包的形式，所以无法对其升级。</p>\n<h2>替换 react-scripts 包</h2>\n<p><a href="https://github.com/facebookincubator/create-react-app/tree/8cae659ec5a066eff8ea270346dc8c1ef064f9aa/packages/react-scripts">react-scripts</a> 是 CRA 的一个核心包，一些脚本和工具的默认配置都集成在里面，使用 CRA 创建项目默认就是使用这个包，但是 CRA 还提供了另外一种方式来创建 CRA 项目，即使用自定义 scripts 包的方式。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code># 默认方式\n$ create-react-app foo\n\n# 自定义 scripts 包方式\n$ create-react-app foo --scripts-version 自定义包</code></pre>\n      </div>\n<p><code>自定义包</code>可以是下面几种形式：</p>\n<ul>\n<li><code>react-scripts</code>包的版本号，比如<code>0.8.2</code>，这种形式可以用来安装低版本的<code>react-scripts</code>包。</li>\n<li>一个已经发布到 npm 仓库上的包的名字，比如<code>your-scripts</code>，里面包含了修改过的 webpack 配置。</li>\n<li>一个 tgz 格式的压缩文件，比如<code>/your/local/scripts.tgz</code>，通常是未发布到 npm 仓库的自定义 scripts 包，可以用 <code>npm pack</code> 命令生成。</li>\n</ul>\n<p>这种方式相对于之前的<code>eject</code>是一种更灵活地修改 webpack 配置的方式，而且可以做到和 CRA 一样，通过升级 scrips 包来升级项目特性。</p>\n<p>自定义 scripts 包的结构可以参照<code>react-scripts</code>包的结构，只要修改对应的 webpack 配置文件，并安装上所需的 webpack loader 或 plugin 包就可以了。</p>\n<h2>使用 react-app-rewired</h2>\n<p>虽然有这两种方式可以扩展 webpack 配置，但是很多开发者还是觉得太麻烦，有没有一种方式可以既不用<code>eject</code>项目又不用创建自己的 scripts 包呢？答案是肯定的，<a href="https://github.com/timarney/react-app-rewired">react-app-rewired</a> 是 react 社区开源的一个修改 CRA 配置的工具。</p>\n<p>在 CRA 创建的项目中安装了<code>react-app-rewired</code>后，可以通过创建一个<code>config-overrides.js</code> 文件来对 webpack 配置进行扩展。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/* config-overrides.js */</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code>override</code>方法的第一个参数<code>config</code>就是 webpack 的配置，在这个方法里面，我们可以对 <code>config</code> 进行扩展，比如安装其他 loader 或者 plugins，最后再将这个 <code>config</code> 对象返回回去。</p>\n<p>最后再修改<code>package.json</code>中的脚本命令，修改内容请见<a href="https://github.com/timarney/react-app-rewired#3-flip-the-existing-calls-to-react-scripts-in-npm-scripts">这里</a>。</p>\n<h2>scripts 包 + override 组合</h2>\n<p>虽然<code>react-app-rewired</code>的方式已经可以很方便地修改 webpack 的配置了，但其实我们也可以在自定义的 script 包中实现类似的功能。</p>\n<p>在<code>react-app-rewired</code>的源码中可以看到它核心的包也叫 <a href="https://github.com/timarney/react-app-rewired/tree/4954531eaab6da14c4e3c943cb2038b46d5f9125/packages/react-app-rewired">react-app-rewired</a>，里面重新覆盖了<code>react-scripts</code>中的几个脚本文件，包括<code>build.js</code>、<code>start.js</code>和<code>test.js</code>。</p>\n<p>具体过程是怎样的呢？以<code>build.js</code>为例：</p>\n<ul>\n<li>先获取 webpack 的基本配置，然后再调用<code>config-overrides.js</code>（就是在根目录中新增的那个文件）中的<code>override</code>方法，将原先的 webpack 对象作为参数传入，</li>\n<li>再取得经过修改后的 webpack 配置对象</li>\n<li>最后再调用<code>react-scripts</code>中的<code>build.js</code>脚本，传入修改后的 webpack 对象来执行命令，</li>\n</ul>\n<p>具体源码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> overrides <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../config-overrides\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpackConfigPath <span class="token operator">=</span> paths<span class="token punctuation">.</span>scriptVersion <span class="token operator">+</span> <span class="token string">"/config/webpack.config.prod"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// load original config</span>\n<span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>webpackConfigPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// override config in memory</span>\nrequire<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>webpackConfigPath<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span>exports <span class="token operator">=</span>\n  overrides<span class="token punctuation">.</span><span class="token function">webpack</span><span class="token punctuation">(</span>webpackConfig<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// run original script</span>\n<span class="token function">require</span><span class="token punctuation">(</span>paths<span class="token punctuation">.</span>scriptVersion <span class="token operator">+</span> <span class="token string">\'/scripts/build\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>知道了原理之后，我们也可以修改自定义 scripts 包的脚本文件，还是以<code>build.js</code>为例，在获取基本 webpack 配置对象和使用 webpack 对象之间加入以下代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// override config</span>\n<span class="token keyword">const</span> override <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>paths<span class="token punctuation">.</span>configOverrides<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> overrideFn <span class="token operator">=</span> override <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token operator">=></span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> overrideConfig <span class="token operator">=</span> <span class="token function">overrideFn</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>overrideConfig</code>就是修改后的 webpack 对象，最后修改调用了 webpack 对象的代码，将原来的 webpack 对象替换成修改后的 webpack 对象。</p>\n<h2>总结</h2>\n<p>CRA 是一个非常棒的 React 脚手架工具，但你如果不满足于它的 webpack 默认配置，你可以通过上述几种方式来扩展自己项目的 webpack 配置，这几种方式各有优缺点，可以结合具体的使用场景来选择合适自己的方式。</p>',fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置",date:"2018-01-10",catalog:"前端",author:"kingzzm"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"}}}});
//# sourceMappingURL=path---2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi-cff88ce4ad0b0660ef1b.js.map