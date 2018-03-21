webpackJsonp([0xe6da802a2be9],{574:function(a,n){a.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-02-23-css3-clip-path-yong-fa-jie-shao/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-1c2d6b76dfae6405f62a3a1abd482ee2-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABuwmeseqLA//EABoQAQADAAMAAAAAAAAAAAAAAAEDERITITP/2gAIAQEAAQUCF1ydDZI1MLiHy//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAjH/2gAIAQMBAT8BdMcv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AcV//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERIYH/2gAIAQEABj8CaWws4UUG7uCP/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAIUFREDGx/9oACAEBAAE/IUAIdiTHJ4NvYrpei4ZoQ01mX0tZ8H//2gAMAwEAAgADAAAAENPf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERcf/aAAgBAwEBPxCiaNUZ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EA5DFL//xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFhUZH/2gAIAQEAAT8QM/IM2NcIYzrBGRfRVleSutHwfsChTUq63NI4Cywzi5u9RX1tn//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CSS3 clip-path 用法介绍"\n        title=""\n        src="/static/header-1c2d6b76dfae6405f62a3a1abd482ee2-d6978.jpeg"\n        srcset="/static/header-1c2d6b76dfae6405f62a3a1abd482ee2-527f0.jpeg 300w,\n/static/header-1c2d6b76dfae6405f62a3a1abd482ee2-9a7cd.jpeg 600w,\n/static/header-1c2d6b76dfae6405f62a3a1abd482ee2-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     ## 一、基本概念</p>\n<p>刷新 QQ 空间动态时，发现一则广告，随着用户上下滑动动态列表，就会自动切换广告图片，这样的效果对移动端本就不大的屏幕来说，无疑是很精妙的考虑，这样的效果是怎么实现的呢？</p>\n<p>你可以点击这里：<a href="http://sandbox.runjs.cn/show/9mjidsy2">QQ空间广告示意demo</a></p>\n<p>接下来就说说这个效果的具体实现思路：</p>\n<ol>\n<li>将两张图片通过定位，相对于图片容器堆叠在一起；</li>\n<li>在图片容器的左上角或右下角选取一个圆心，绘制一个圆，不断加大圆的半径来显示第二张图片；</li>\n<li>上划下拉时，根据滑动速度动态改变圆的半径；</li>\n<li>当图片容器距屏幕顶部或底部的距离为 0 时，则相应的改变图片堆叠顺序及圆心位置。</li>\n</ol>\n<p>在图片上绘制圆，为什么就能显示出第二张图片呢？说到这里，就不得不说一下咱们今天的主角 clip-path，引用 MDN 上的描述：</p>\n<blockquote>\n<p>clip-path属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部svg的路径，或者作为一个形状例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。</p>\n</blockquote>\n<p>clip-path 的含义就是裁剪路径，通过指定的闭合路径或者形状，甚至是 SVG 中 clipPath 标签定义的形状，裁剪出部分需要保留的区域，这样网页中的布局实现可以是多种多样的。</p>\n<p>在 clip-path 出现之前，CSS2.1 中的 clip 属性也有裁剪的效果，但是它只支持矩形，而且只对 position:absolute 或者 position:fixed 的元素生效，使用方式如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>clip: rect(60px, 60px, 60px, 60px); // 标准写法\nclip: rect(60px  60px  60px  60px); // 兼容 ie 及 火狐浏览器</code></pre>\n      </div>\n<p>注意: rect 参数的顺序为 top、right、botton、left</p>\n<p>所有主流浏览器都支持 clip 属性，在雪碧图（ CSS Sprite ）的展示仍然有它的用武之地，但是由于 clip 属性的局限性， clip 已经被 clip-path 代替。平常开发中我们可以使用 border、border-radius 等属性制作三角形、圆或圆角矩形等简单图案，clip-path 为我们提供了更多的可能，结合 SVG 的 path、animate 等标签可以制作更多的有趣的图案。</p>\n<h2>二、用法实践</h2>\n<p>clip-path 属性可以裁剪出很多图形，circle、ellipse、polygon、inset，同时也可以使用动画和 SVG 的 clipPath 标签。</p>\n<ul>\n<li>\n<p>圆 circle</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>clip-path: circle(25% at 50% 50%);</code></pre>\n      </div>\n</li>\n<li>\n<p>椭圆 ellipse</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>clip-path: ellipse(25% 25% at 50% 50%);</code></pre>\n      </div>\n</li>\n<li>\n<p>inset</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>clip-path: inset(35% 35% 35% 35% round 0 70% 0 70%);</code></pre>\n      </div>\n</li>\n<li>\n<p>多边形 polygon</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>clip-path: polygon(50% 0, 25% 50% ,75% 50%);</code></pre>\n      </div>\n<p>你可以点击这里：<a href="http://sandbox.runjs.cn/show/gdcpiqf5">clip-path示意demo</a></p>\n</li>\n<li>\n<p>url</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>contract<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img02.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clipPath</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clip02<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>210<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animate</span>\n        <span class="token attr-name">attributeType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CSS<span class="token punctuation">"</span></span>\n        <span class="token attr-name">attributeName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>r<span class="token punctuation">"</span></span>\n        <span class="token attr-name">values</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0;480;0<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dur</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>9s<span class="token punctuation">"</span></span>\n        <span class="token attr-name">repeatCount</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>clipPath</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.contract {\n  clip-path: url(#clip02);\n  z-index:1;\n}</code></pre>\n      </div>\n<p>值得说明的是使用 SVG 的 clipPath 标签可以包裹 animate，其中 animate 标签的 attributeName 是指设置圆的半径，values 可以设置动画的帧，可以有多个值用分号分割，dur 是指动画的持续时间，repeatCount 是指动画的次数。</p>\n<h3>兼容性</h3>\n<p>目前 IE 和 Edge 都不支持这个属性。Firefox 仅部分支持 clip-path，部分支持是指只支持形状和 URL(#path) 内联SVG的语法。Chrome、Safari 和 Opera 需要使用 -webkit- 的前缀兼容此属性。不支持外部的 SVG 形状。更多兼容信息可以点击这里查看 <a href="https://caniuse.com/#search=clip-path">clip-path 浏览器兼容情况</a>。</p>\n<h2>三、经验总结</h2>\n<p>使用 URL(#path) 内联SVG 的方式，我们可以很轻易的裁剪出复杂的形状，也能够包含一些形象生动的动画效果，比如在扑克游戏出牌下注的倒计时上添加扇形遮罩，或是在矩形边缘添加倒计时进度，加载中的动画等等，都能够使用clip-path 属性巧妙的实现，同时在使用 clip-path 属性可以裁剪图形时可以灵活的使用相对单位。</p>\n<h2>四、参考链接</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path">clip-path</a></li>\n<li><a href="http://species-in-pieces.com/">species-in-pieces</a></li>\n<li><a href="http://www.zhangxinxu.com/wordpress/2014/12/css3-svg-clip-path/">CSS3/SVG clip-path路径剪裁遮罩属性简介</a></li>\n</ul>',fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍",date:"2018-02-23",catalog:"前端",author:"ielapp"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"}}}});
//# sourceMappingURL=path---2018-02-23-css-3-clip-path-yong-fa-jie-shao-06a600128085a2f7edb9.js.map