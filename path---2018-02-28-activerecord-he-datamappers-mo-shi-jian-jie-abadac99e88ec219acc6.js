webpackJsonp([0x6ccaa05b6336],{602:function(e,a){e.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-65455b15c786b9e8aba91ba7050a53e9-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGFWzpSJCv/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIQEUH/2gAIAQEAAQUCaMqZ0//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAyASAi/9oACAEBAAY/AoyKLT//xAAcEAEAAgEFAAAAAAAAAAAAAAABABExECFhcaH/2gAIAQEAAT8hRLJfIi82uZ2ptxq//9oADAMBAAIAAwAAABBrz//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8QWih//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAIRExQVH/2gAIAQEAAT8QRlhxYpRwvCMRwAAr1i0oXRFeoan/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Active Record 和 Data Mappers 模式简介"\n        title=""\n        src="/static/header-65455b15c786b9e8aba91ba7050a53e9-d6978.jpeg"\n        srcset="/static/header-65455b15c786b9e8aba91ba7050a53e9-527f0.jpeg 300w,\n/static/header-65455b15c786b9e8aba91ba7050a53e9-9a7cd.jpeg 600w,\n/static/header-65455b15c786b9e8aba91ba7050a53e9-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>nodejs 开发 web 应用时，orm 框架如 mongoose，sequelize 等能够帮助我们快速的开发项目，但是当想要再去抽象数据库访问层的时候（如 J2EE 中的 DAO 层），发现很困难，本人一直困惑到底问题出现在哪里，直到有天接触了 typeorm，才揭开了问题的根源。</p>\n<h2>什么是 ORM</h2>\n<p>在深入之前，让我们看看 ORM 是什么。ORM 是一种使用面向对象编程语言在不兼容类型系统之间转换数据的编程技术。相当于创建里一个可以在编程语言中使用的 “虚拟对象数据库”。更简单的来说，让面向对象编程脱离了对手写 sql 的要求。当然 ORM 有这样或那样的问题，不再本篇讨论。</p>\n<h2>Active Record 和 Data Mappers 与 ORM 的关系</h2>\n<p>定义了 ORM 的功能，那么 ORM 有也不同的实现模式。Active Record 和 Data Mappers 是两种 ORM 最常见的实现模式。\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/orm-ebf05926127131367c2761dd4a8774b2-08176.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 819px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 113.18681318681318%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEc0lEQVQ4y42US2xUVRjHz8y905lpO53pPM7rvubO7ctSaGtLaUFsbIm6caXGhSEhbbEzLRSoEFHjypUbTYyGV4waQ0JCohuJRBALvqKmCxNjDEs3KtSEFZYp7fF/7nRqRUy8yS//c7/vO//zzblnDiH/8XyYz4W66jrxNddJQZtBsuo6UR1/LJH415xLlNYGqq+XqD1jRO0crrFrhKiSHwlzrtMHngVPgSkgw3jgR8La3buIGnzwb9cvGWv8nNGGzyiNXWY0/ilj8YvQBc4SJ3M58zfbyv9hW/Yvlmxdsi3rupSps4W8eQV1uh5z41fBNfCjEFHyFWdJbTyfzUbu/Qm/JuP33Q61ibl0S22LsMgXjMXIN4w1hEWfXCLcD0xeLMVC9QOjKWiPDGE8glivX4ppDaAUOVZqi9JSm9GzrT80XGTU+JbD8AJaJ4VwW4h0i7bl+bvBMNhuecVt0K3QATAI+i232AcCxEfwHtS7PseZuagNrzCaSFpOxnY8IV2Pw9SCOlAHk1zb8y2oBHoxK8w7noS6QFqY12q7uX2cJ27BNHQXnr/XLpZugxvgpgaTb0qN6y9hrLm5rkvIL63X/Q7uoO5N7fOxZTXUDZ9z/EAhuYF+L7Z1hHhB+wb31rmlNoVF3tU+70m5YTipk0jcga5AVzB5Zefu0ZChnQ+F+vDY+EpXz7YV4Xgr63XLegF0eCbcx02GFb2SjaSzCR3bTL3DOmGHiMHwA+3zkSVr54x7/hNIfgeugmt10MF92VSzABZheFyfyYu6w/P6YBdYg53OGM0taaMlkzZSaW40N5eiuXzRyOU9M5srGvlC0czlg2g6UzTSrdJsSqVQ22pkk41Rki/EJrhI/Cm4Sb7W5xBPj/CiVNgRJrqj5H88VLRHqHAjvihGCB8gC4zrg22Sn0U+NOyUZdOSB03HPhqRopIRvCIkr2Qln0lBU4LPpBHLgrwUMxlLzhkaT86aZFSRG5RELzMeIydYl76H/vE/zmefTHI22c3ohM/Z1BbO9u+A9jO6T+p3qLi34wm6K3FLNNYONuXTo5KX30dnpyxZOQ1OYfy24OV3QHg3QTvAacRPIH8CegaclKJ8lvHyePiVRWft2CAw61hHleAHFaM1BJ9TtVhlb82w8rhtzYdxzuocUI59XHFemdc1b4ihRN1wUopZtbXn2PLwjleqmge6nl/Gvil08XR4cYjKGDpc69lyrDq0/eXq4MBL1d7eF27b1iGF+RVd89YmwykpDqj2tsN3t3QfXYPxWlA6dFfHYPRMzbA8jo+h2oJDq12d82udHfNrHe1HqrY8jA7Ls7rmNTG0frB5eT++mOJ0WtFCDc7KSsewt+uGlXG9gI4zWmd61baOaMMDuuZ1sT1OVJYYzWzaRZd7uKw8wq2ZMQH0mCLWystcF7ewck5vflgjdb5Wg9ijyLkvZqj5kxQxcpk76e8L8YRqIVGVBGliqAiJhFd8I4leoIWmV1lf5hx1mtev/0hYk0BtBorYDwUzfp4HLdd5xvwLWoqF2PohksYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="orm"\n        title=""\n        src="/static/orm-ebf05926127131367c2761dd4a8774b2-08176.png"\n        srcset="/static/orm-ebf05926127131367c2761dd4a8774b2-47a98.png 300w,\n/static/orm-ebf05926127131367c2761dd4a8774b2-85419.png 600w,\n/static/orm-ebf05926127131367c2761dd4a8774b2-08176.png 819w"\n        sizes="(max-width: 819px) 100vw, 819px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Active Recode 和 Data Mapper 不同</h2>\n<h3>Active Recode 模式</h3>\n<p>Active Record 模式最早源于 Ruby On Rails 框架，从此流行起来。nodejs 中常用的 mongoose 和 sequelize 就是采用此模式。该模式下，模型对象都会继承一个基类，这个基类就是 Active Record 的实现，里面包含里完整的数据库操作方法。</p>\n<p>典型的写法:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuser<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'knownsecer\'</span><span class="token punctuation">;</span>\nuser<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>可以看出，你的 POJO 和数据库的持久化方法都集成到一个复杂的对象上了，这里每个对象对应数据库中的一行。</p>\n<h3>Data Mapper 模式</h3>\n<p>Data Mapper 模式是 ORM 最早的一种实现方式，该模式完全把数据和数据库持久化方法分离开，所以你的对象完全是干净的对象。nodejs 中采用该模式的框架比如 typeorm。该模式会提供一个统一的实体对象管理器 <strong>EntityManager</strong> 用来持久化操作。</p>\n<p>典型写法:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuser<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'knownsecer\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> entityManager <span class="token operator">=</span> connection<span class="token punctuation">.</span>manager<span class="token punctuation">;</span>\nentityManager<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Active Record 和 Data Mappers 应用场景</h2>\n<p>Active Record 和 Data Mapper 是长期存在的两种模式，不存在孰优孰劣的问题，只是适用于不同的应用场景。</p>\n<p>Active Record，简单，易用，开发效率高。由于数据库记录和系统对象紧密匹配，适用于简单的领域模型或小型项目。正是由于这些特点，Active Record 成为 web 开发最受欢迎的 ORM。</p>\n<p>Data Mappers，灵活，高性能，更符合 OOP 思想。可以使对象和数据之间存在一个抽象层，可以构建更复杂模型，适合大型的，长期发展的项目。</p>\n<h2>问题</h2>\n<ol>\n<li>大家目前都在使用什么样的 ORM？</li>\n<li>思考下该 ORM 是属于哪种模式？</li>\n<li>既然选择里该框架肯定是冲着她的优点去的，那么在开发的过程在有没有体会到该框架带来的弊端？</li>\n<li>有没有想过有朝一日放弃所有的 ORM，返璞归真，从 sql 开始？</li>\n</ol>',fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介",date:"2018-02-28",catalog:"开发干货",author:"suntopo"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"}}}});
//# sourceMappingURL=path---2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie-abadac99e88ec219acc6.js.map