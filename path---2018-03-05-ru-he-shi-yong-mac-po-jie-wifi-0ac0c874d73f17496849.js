webpackJsonp([0x5dad796d1e16],{571:function(e,a){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-49e7c5b37f51e2a12538a6f4fbef2e96-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB34WJGAv/xAAXEAEAAwAAAAAAAAAAAAAAAAABAAIg/9oACAEBAAEFApRUx//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAAAAgIf/aAAgBAQAGPwIq/wD/xAAYEAACAwAAAAAAAAAAAAAAAAAAIREgcf/aAAgBAQABPyEYDyK//9oADAMBAAIAAwAAABCcD//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAwEBPxA1n//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKf/xAAaEAEAAgMBAAAAAAAAAAAAAAABEUEAICEx/9oACAEBAAE/EFgXECTKnxXuv//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="如何使用Mac破解Wifi"\n        title=""\n        src="/static/header-49e7c5b37f51e2a12538a6f4fbef2e96-d6978.jpeg"\n        srcset="/static/header-49e7c5b37f51e2a12538a6f4fbef2e96-527f0.jpeg 300w,\n/static/header-49e7c5b37f51e2a12538a6f4fbef2e96-9a7cd.jpeg 600w,\n/static/header-49e7c5b37f51e2a12538a6f4fbef2e96-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>无线网络认证原理</h1>\n<p>802.11无线网络常见的认证方式包括：</p>\n<ol>\n<li>不启动安全</li>\n<li>WEP</li>\n<li>WPA/WPA2-PSK</li>\n<li>WAP/WPA2 802.1x (radius认证)</li>\n</ol>\n<p>本文主要讨论的是大家日常生活中用到的WPA-PSK认证方式的破解过程， 其中的关键是获取握手包，</p>\n<p>4way-handshake：\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/4-way-handshake-af2eba35b70fcf45d780b28caa42faab-678bc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 393px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 79.64376590330788%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABYUlEQVQ4y42T0U6DQBBFF6xFRQERXKCmUq021miq0TdjfDDxzSfjP/j/P+BsPNts1yU6yQ0Lw9yZuTOrlFI7gqXgWrAQnKkfi9SwWV9DrI2rFYSdYCLIBJUXnAh6vu96vhxSLSgEpXUUZPgSvPA+4ce54FXwTBeaAgzRVHBPlYY8NmQzmKc4LgRHJIoD7ca0bH1btlVrd1Qzg/QU+JpFA7qOqXZtl4JzwQryE4jVP4ZiNd4g7Gm5p9XaETcVtAwroZP9QIImlPWY4JqzRtM3BnXLcJb4aob0yfuv8jVrYUQe8RyyEXEZO9iFhmiq2h7QKwpo1zK8mpUz71c+YaL+NkvaQWIG+Uj7c/dHPUBQgcJpzVY4ZlAdg2zdwEPBB9lK5zY8OCv1ROKGvb1hWIvQta28tYgdkVPvexTYkOAuZQTnnM3zAH1WnHOwx4V4d+SK/ApLJ8CiIEnKOXcSadpe3+Vvc90UQ1CCRhYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="4-way-handshake"\n        title=""\n        src="/static/4-way-handshake-af2eba35b70fcf45d780b28caa42faab-678bc.png"\n        srcset="/static/4-way-handshake-af2eba35b70fcf45d780b28caa42faab-a49b3.png 300w,\n/static/4-way-handshake-af2eba35b70fcf45d780b28caa42faab-678bc.png 393w"\n        sizes="(max-width: 393px) 100vw, 393px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n4次握手就是认证器(AP)和请求者(SPA)之间的4次消息交换过程， 用一个伪随机函数PRF生成PTK.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PMK = pdkdf2_SHA1(passphrase，SSID，SSID length，4096)\n\nPTK = PRF(PMK + ANonce + SNonce + AP_MAC + SPA_MAC)</code></pre>\n      </div>\n<p>step1: AP生成一个ANonce。 发送给请求者SPA。</p>\n<p>step2: SPA生成一个SNonce和利用2个Nonces生成PTK， 最后发送SNone和MIC作为PMK的验证。</p>\n<p>step3: AP生成PTK， 验证MIC信息，验证成功后发送GTK， MIC， RSC信息给SPA。</p>\n<p>step4: SPA验证MIC， 安装密钥， 发送消息给AP。</p>\n<h1>无线网络破解原理</h1>\n<p>利用网络攻击让SPA和AP断开， 随后SPA会自动尝试连接AP， 在这个重新连接的过程中，数据通信就产生了， 利用工具或者脚本捕获4次握手过程，生成一个包含了4次握手的cap包， 然后利用字典进行暴力破解。</p>\n<h1>Mac下无线网络破解</h1>\n<p>使用mac进行无线网络破解主要需要解决的是Aircrack-ng的安装以及握手包的获取。</p>\n<h3>安装Aircrack-ng</h3>\n<p>方式一： 使用MAcport进行安装，sudo port install aircrack-ng</p>\n<p>方式二： 使用HomeBrew进行安装， brew install aircrack-ng</p>\n<h3>握手包获取</h3>\n<p>直接使用aircrack-ng会出现问题，提示wireless-tools找不到， 因为airmon-ng依赖于wireless-tools， 而wireless-tool在Mac下编译有问题。其实Mac自带一个airport工具， 可以方便的扫描，监听模式下监听。</p>\n<h2>操作步骤：</h2>\n<p>step1: ifconfig 查看网卡名称</p>\n<p>step2: airport en0 scan 扫描网络</p>\n<p>step3: sudo airport en0 sniff 6 监听模式监听信道6， 等待握手包的捕获，一段时间后使用control+C结束。 文件位于/tmp/airportSiffXXX.cap</p>\n<p>step4: aircarck-ng -w ~/wordlist.txt /tmp/airportSniffXXX.cap 使用密码字典进行暴力破解。</p>\n<h1>总结</h1>\n<p>由于多数用户缺乏相关安全意识， 仅使用手机号码，生日以及简单的数字作为WPA-PSK的密码，密码字典可以针对这类密码进行快速的破解。</p>\n<p>最后我们再做个简单计算让大家了解提高密码复杂度的必要性， 按照现在主流单机环境配置，维持100~~300k/s(k/s指的是破解时每秒调用的key数量)的破解速率，要把一个以小写字母和数字组合的5位WPA密码破开大概需要2-7天。这还只是5位数WPA密码，若是采用WPA密码为纯小写字母且长度在10位数以上，则最快需要时间是14921年! 如果在加上特殊符号， 暴力破解将彻底失去意义。</p>',fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi",date:"2018-03-05",catalog:"科普",author:"Nicolas"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"}}}});
//# sourceMappingURL=path---2018-03-05-ru-he-shi-yong-mac-po-jie-wifi-0ac0c874d73f17496849.js.map