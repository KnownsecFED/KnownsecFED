webpackJsonp([0xbe4620f3157c],{561:function(e,t){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-02-04-fan-yi-reactscope-jie-shao/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-9b54ff1cab86ce5fd0b762b1d94ad917-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVQoz4VR20rDQBTc//8aEUUEER9ERR+0L0KgSSpqTNPGXnLdzWXcWbphU2w7MNnk5Oyc2Vmhwgj9xEfiBXj3PEynPiz6vh/Rrdn3/T6h2hZJkiCOY0TRD9I0RZ7nqKpq2HBowP4wQsTzOfwgxHq91mK/WK1WKIoCZVkNIuHsA59f3ziGIJwhWSwgnp5fcP/wOHLQdR1a7ZwstdOz8wvc3N5BKYWmafTa7FY1rJdX13h9m0DYCdxshPTPVip0jjAhZW1OcAqilnKUASdKXXPBPDebDZbLVEdRIssyk3O+i4a1uq6NU8HHcGOadERRN3AO2G4zLHRGzJekIPtsNOzjtxF0i66grdMhHTCCYzAO2WhF7OpOJunolJiNy2RI5UNkEwV57MYZ+B+lvsw/N70MkQsOVsMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="【翻译】React Scope介绍"\n        title=""\n        src="/static/header-9b54ff1cab86ce5fd0b762b1d94ad917-d6978.jpeg"\n        srcset="/static/header-9b54ff1cab86ce5fd0b762b1d94ad917-527f0.jpeg 300w,\n/static/header-9b54ff1cab86ce5fd0b762b1d94ad917-9a7cd.jpeg 600w,\n/static/header-9b54ff1cab86ce5fd0b762b1d94ad917-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>原文链接：<a href="https://levelup.gitconnected.com/introducing-react-scope-a87d9f5247df">React Scope</a></p>\n<p>作者：<a href="https://levelup.gitconnected.com/@tiffanylin_54989">Tiffany Lin</a></p>\n<p>随着React应用程序复杂度的增长，<em>components</em>、<em>state</em> 、<em>props</em>的复杂性也变得越来越高。上个月，一些开发人员和我对于这个问题建立了解决方案。我们决定开发Chrome的插件<em>React Scope</em>，它提供了开发人员的React应用程序组件的分层树视图。</p>\n<p><em>React Scope</em>也是交互式的；当开发者在他们的应用中（例如：通过点击事件或者输入表单）触发<em>state</em>的变化，这个树形的表就相应的更新。形象的展现state的变化和分清props从哪里传递下来可以使得调试React应用变得更加简单。</p>\n<h3>如何工作</h3>\n<p><em>React Scope</em>利用<em>React Developer Tools</em>来检索有关客户端应用程序的信息。然后，我们使用这些数据来实现DOM树的可视化。用户只需将鼠标悬停在树内的节点上即可查看每个组件的name、state和props。</p>\n<p>接下来，开发人员可以与他们的React应用程序交互来触发状态更改。 <em>React Scope</em>将这些数据保存在一个缓存中，该缓存连接到一个监听器函数跟踪状态的变化。</p>\n<p>最后，<em>React Scope</em>提供了<em>previous</em>和<em>next</em>按钮。点击这些呈现从缓存到树的数据，允许开发人员在他们的应用程序的当前和之前的状态间<em>time travel</em>。</p>\n<h3>技术挑战</h3>\n<p>建立React Scope带来了一系列技术挑战，这些挑战提升了我们的极限。但是随着挑战的提升，我们从这个项目学到了很多。\n这是我们必须解决的主要技术障碍：</p>\n<h4>检索客户端应用程序数据</h4>\n<p>我们利用<em>React Developer Tools</em>的<em>fiber root</em>（以及<em>React 15</em>及以下版本渲染器）来获取客户端的应用数据，这些数据返回了一个对象。由于对象嵌套严重，因此解析这个特别困难。我们编写了递归函数来提取必要的数据（组件name、state 和 props），然后根据<em>D3.js</em>的严格格式进行格式化。</p>\n<h4>处理异步事件</h4>\n<p>由于<em>iframe</em>与主浏览器窗口之间的异步关系，从<em>React Developer Tools</em>获取数据有点棘手。我们使用<em>Async</em> / <em>Await</em>来确保从用户应用程序传递给<em>React Scope</em>的数据是准确的。</p>\n<h4>管理state数据</h4>\n<p>最后，我们需要确定一个可行的缓存系统来存储初始和随后的状态改变数据。我们确定一个双向链表的线性结构是最有意义的。我们将客户端应用程序的初始状态存储为<em>head/tail</em>，并将任何新的状态数据添加到<em>head</em>。然后，当用户点击<em>previous</em>和<em>next</em>按钮，我们应用链表逻辑来呈现相关的状态数据。例如，如果他们点击<em>previous</em>按钮，我们的应用程序将访问当前状态的<em>node.prev.value</em>并将该数据呈现给树形图。</p>\n<h3>为什么我们相信它</h3>\n<p>我们相信<em>React Scope</em>有可能简化React应用程序开发，特别是我们的<em>state time traveling</em>功能。例如，如果用户的输入触发意外的状态变化，开发人员可以简单地引用先前的状态来确定发生错误的位置。</p>\n<p>而且，能够很容易地看到<em>props</em>如何传递，可以使调试变得更容易。例如，如果一个<em>props</em>在某个组件中是不可访问的，那么用户可以在树中查找以确定它传递失败的位置。</p>\n<h3>入门</h3>\n<p>您可以从<a href="https://chrome.google.com/webstore/detail/react-scope/nkkiickggkoojpdiajhgkbdmfgcinlai">Chrome网上应用店</a>安装<em>React Scope</em>。如果您有任何想法或建议，请给我们反馈。这是我们每个人热爱的项目，我们正在积极探索改善它的方法。</p>\n<p>了解更多信息，请访问<a href="http://reactscope.com/">React Scope官网</a>和<a href="https://github.com/React-Scope/React-Scope">GitHub</a>。</p>',fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍",date:"2018-02-04",catalog:"前端",author:"RUUR"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"}}}});
//# sourceMappingURL=path---2018-02-04-fan-yi-reactscope-jie-shao-faa03c0ce9a4cf60778d.js.map