webpackJsonp([0xeed058101be7],{519:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-08-mapbox-gl-js/index.md absPath of file >>> MarkdownRemark",html:'<p>最近在折腾的 web 端的可视化项目，由于相关业务的需要，用到了 Mapbox 这一地图开发的神器。在此先奉上一个基于mapbox-gl实现的demo短片（来源：<a href="https://uber.github.io/deck.gl/#/">uber的deck.gl项目</a>）：</p>\n<p><img src="/demo-e3d6a9b924539c98bbd68ec2be2e829a.gif" alt="demo"></p>\n<p>下面我们从这个项目一步步来介绍 Mapbox 的前端 GIS 引擎 <a href="https://github.com/mapbox/mapbox-gl-js">Mapbox GL JS</a>.</p>\n<h1>一、简单了解</h1>\n<p>首先，Mapbox 在地图领域是一家很 Newbee 的公司。已为 Foursquare、Pinterest、Evernote、金融时报、天气频道、优步科技 等公司的网站提供了订制在线地图服务。</p>\n<p>自2010年起，该公司快速地拓展了订制地图的市场地位，以回应 Google地图 等地图供应商提供的有限选择。Mapbox 是一些开放源代码地图库及应用程序的创建者或最大的贡献者，其中包含了MBTiles 规范、TileMill 制图 IDE、Leaflet JavaScript 库，以及 CartoCSS 地图格式化语言与语法分析器等。</p>\n<p>该公司的数据同时从开放与专有的来源获取，开放的数据源如 开放街图（OSM, Open Street Map） 以及 NASA 等，而专有的数据源则包含了 DigitalGlobe。其技术奠基于 Node.js、CouchDB、Mapnik、GDAL 与 Leafletjs。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-b0c867989f10ee45f45a3c046a9307aa-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwX/2gAMAwEAAhADEAAAAVPlo0IqMDj/xAAZEAACAwEAAAAAAAAAAAAAAAABAgADERL/2gAIAQEAAQUCyLQxDLyZWTk//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABgRAAIDAAAAAAAAAAAAAAAAAAECEBEh/9oACAECAQE/AXsDI//EABoQAAEFAQAAAAAAAAAAAAAAAAABAhARIUH/2gAIAQEABj8CLwpYdvI//8QAGxABAAICAwAAAAAAAAAAAAAAAREhABBBYXH/2gAIAQEAAT8haEuWcDi8RYJO9EjR61//2gAMAwEAAgADAAAAEHvv/8QAFhEBAQEAAAAAAAAAAAAAAAAAERAh/9oACAEDAQE/EA7P/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxB7XFZp/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITEQUWGR/9oACAEBAAE/EAE2lhUNXgvZfyP14A8CxRYBGe45bZ//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mapbox官网"\n        title=""\n        src="/static/header-b0c867989f10ee45f45a3c046a9307aa-d6978.jpeg"\n        srcset="/static/header-b0c867989f10ee45f45a3c046a9307aa-527f0.jpeg 300w,\n/static/header-b0c867989f10ee45f45a3c046a9307aa-9a7cd.jpeg 600w,\n/static/header-b0c867989f10ee45f45a3c046a9307aa-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Mapbox 针对不同平台均开发了相应的 GIS 引擎以满足开发者或相关用户的需要，如：iOS SDK（用于iOS端开发）、Android SDK（用于Andriod端开发）、Navigation SDK（用于Navigation端开发）、Unity SDK（用于Unity端开发）、GL JS（用于web端开发）。不同平台的SDK，除使用方式不同外，功能特性上也多多少少存在不同。此外，Uber还针对react开发了 <a href="https://github.com/uber/react-map-gl">react-map-gl</a>。总的来说，Mapbox的开源技术栈是非常全面的。</p>\n<h1>二、轻松上手</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/mapbox_doc-19d2569d969e558d6d06fbabd70dc2c5-a43b2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1025px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 87.21951219512195%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAACG0lEQVQ4y5VUTW8TMRDdf4iE1CsHJFS4gMQJiQsqcIBKHDjyb5BoFcqBG1IQQZHSpGn2y/auvfZ+PWacepNUKGktPdm7s372ezOz0WTW4yrucZ322DekKlDXDYQsUGoDbSr/zDOj6zrMpn8RubpH32/IOFDXLZz7P+weVLZGZFyzQ1iWJV59GOH52zM8ffMNj15/xYtPF3j5+QeOT0d4QrHHH0c4OqHY6Xc8fHeOB+/PcUSxZ19+IlopC0Ps24SrvMJVajwWAyrMGdkGl1uYEZbSIspKR4sKbdcPhE3TYDweYzKZYDqdYrlc4q4jiumGC2HQkHeBkC1wzpEvNZS2hGrHlr2EotDQlDVr7UDYth1WSYo4V0iEQpplSFN6jmMkSeLXYY6TDLHUEKbe3DAl2d2WZM40b2AC3sQQQvh3A2EukXMJ0fdVxSV0Q5hrh5puFCQFyW3b3hu8L1KlgaETtrPMgYvFL8osScoEVgSllLdlHzwhZ3iek4dNu0N49ntJZSNJmvJelpq91ocJ2UxJ6G5Jzv9MyKscqig9kb4zoV4n5LaHZj6HJpnB9ENyB8KVKHEZC4hiTbQum9ZnVUrp1/cZUVJYXJOPrlkXNt+GyyaUDB9gjPHQ1Pcl/QBMZaFt478NseomsUOncE9z+4X0F8aiqBwkdYo0DoaI2ENPTHNhmbwZWna4oSzWJwcPA2HwJaMuYfk8+P2hFvwH6vMZqQC0A4wAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mapbox文档"\n        title=""\n        src="/static/mapbox_doc-19d2569d969e558d6d06fbabd70dc2c5-a43b2.png"\n        srcset="/static/mapbox_doc-19d2569d969e558d6d06fbabd70dc2c5-7f43b.png 300w,\n/static/mapbox_doc-19d2569d969e558d6d06fbabd70dc2c5-774e0.png 600w,\n/static/mapbox_doc-19d2569d969e558d6d06fbabd70dc2c5-a43b2.png 1025w"\n        sizes="(max-width: 1025px) 100vw, 1025px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>mapbox-gl 的 <a href="https://www.mapbox.com/mapbox-gl-js/api/">文档</a> 由 API、Style Specification、Example、Plugins 四部分内容组成。</p>\n<p>顾名思义，API 是一般框架(类库)提供给用户的全部接口（方法）的说明书；Style Specification 是 Mapbox 地图的样式规范；Example 是一些常用功能或常见业务的代码示例，囊括了使用 Mapbox 所能实现的大部分功能效果；Plugins 则是官方推荐的可与 mapbox-gl 一同使用的一些增效插件和开源项目，如一些第三方的UI控件、显示类插件、框架集成工具、开发辅助工具、实用工具类库等等。</p>\n<p>对于初了解 Mapbox 的童鞋，建议先从官网的 Example 入手，能够较快掌握 mapbox-gl 的使用并投入开发实践。</p>\n<h1>三、快速实践</h1>\n<p>下面以文章开头展示的项目为主，介绍其实战步骤。</p>\n<h2>1. 加载地图：</h2>\n<p>由于使用在线地图服务和 <code>style</code> 时需要验证用户 <code>token</code>，所以在使用 <code>mapboxgl</code> 时需要先配置用户 <code>token</code>（在Mapbox官网注册用户即可获取）。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> mapboxgl <span class="token keyword">from</span> <span class="token string">\'mapbox-gl\'</span><span class="token punctuation">;</span>\nmapboxgl<span class="token punctuation">.</span>accessToken <span class="token operator">=</span> <span class="token string">\'&lt;Your Token Here>\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>接下来使用创建地图实例。主要配置项如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> <span class="token string">\'&lt;Id of Container Element>\'</span><span class="token punctuation">,</span>\n  style<span class="token punctuation">:</span> <span class="token string">\'&lt;Your Style Here>\'</span><span class="token punctuation">,</span>\n  center<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">112.508203125</span><span class="token punctuation">,</span> <span class="token number">37.97980872872457</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  zoom<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  pitch<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  bearing<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>其中，<code>container</code> 是地图容器的元素 <code>id</code>，<code>style</code> 是地图样式的 <code>url</code>，或者你自己定义的 <code>style</code>（需遵循Mapbox样式规范），<code>center</code> 是地图加载后默认的中心点位置，用以定位地图加载时的位置。<code>zoom</code> <code>pitch</code> <code>bearing</code> 分别指缩放级别、地面法线偏移角、地轴偏移角等，用以确定当前视窗所显示的地图区域和空间关系。配置项的意义均可查看官网文档。</p>\n<h2>2. 绘制图形</h2>\n<p>这里主要介绍视频中的3D建筑、飞线动画等是如何实现的。这里以相关代码片段来介绍实践的方法。</p>\n<p>在Mapbox中绘制图形时， <code>layer</code> 和 <code>source</code> 是最重要的一组概念，后者用于存储图形的数据内容，前者则是图形在3D场景中的表现（图层）。在Mapbox中，图层一旦被创建，与其同名（<code>id</code>相同）的数据源源（即<code>source</code>）也必然被创建。反之，也可以在创建source后再创建一个图层使用这个已创建的数据源，这时数据源与图层间并不要求同名。而我们通过改变数据来驱动图形变化，便是才去的第二种方式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 创建id为buildings的数据源</span>\nmyMap<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">\'buildings\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'geojson\'</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token string">\'&lt;GeoJson Contents>\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用buildings的数据来绘制id为building_layer的图形</span>\nmyMap<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'building_layer\'</span><span class="token punctuation">,</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'fill-extrusion\'</span><span class="token punctuation">,</span>\n  source<span class="token punctuation">:</span> <span class="token string">\'buildings\'</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span><span class="token operator">&lt;</span>Other Options<span class="token operator">></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>基于上面的方式，当数据改变时，我们只需要重设数据源的数据，即可驱动图层重绘：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>myMap<span class="token punctuation">.</span><span class="token function">getLayer</span><span class="token punctuation">(</span><span class="token string">\'building_layer\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  myMap<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token string">\'buildings\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>New <span class="token class-name">GeoJson</span> Contents<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>至于3D效果及动画的具体实现，这里给出两个官网上的示例，相信大家能一目了然：</p>\n<ul>\n<li>\n<p><a href="https://www.mapbox.com/mapbox-gl-js/example/3d-buildings/">用3D形式呈现建筑</a></p>\n</li>\n<li>\n<p><a href="https://www.mapbox.com/mapbox-gl-js/example/animate-point-along-route/">给路径中的一个点添加动画效果</a></p>\n</li>\n</ul>\n<h2>3. 图形交互</h2>\n<p>Mapbox提供的交互方法是比较灵活的，活学活用API文档便能实现各种炫酷、实用的交互效果。比如：使用\n<code>myMap.on(\'zoom\', callback)</code> 可以将图形与地图的缩放相绑定，当缩放系数小于某个值时，可以隐藏掉一些图形元素：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>myMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'zoom\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>myMap<span class="token punctuation">.</span><span class="token function">getZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    myMap<span class="token punctuation">.</span><span class="token function">setLayoutProperty</span><span class="token punctuation">(</span><span class="token string">\'building_layer\'</span><span class="token punctuation">,</span> <span class="token string">\'visibility\'</span><span class="token punctuation">,</span> <span class="token string">\'none\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    myMap<span class="token punctuation">.</span><span class="token function">setLayoutProperty</span><span class="token punctuation">(</span><span class="token string">\'building_layer\'</span><span class="token punctuation">,</span> <span class="token string">\'visibility\'</span><span class="token punctuation">,</span> <span class="token string">\'visible\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>再比如，连续调用 <code>myMap.flyTo()</code> 的方法使视图在地图上按照一定的轨迹缓慢移动，可以给用户一种模拟飞行的体验。视频中的自动巡视的效果正是这样实现的。</p>\n<p>诸如 <code>click</code> <code>mouseover</code> <code>popup</code> 等效果，官网文档中的示例已经具体呈现，这里就不详细展开了。</p>\n<h2>4. tiles-server的本地化</h2>\n<p>由于 Mapbox 地图服务使用 MBTiles 存储数据，目前很多地图服务都接受了这套标准（如：OSM，Open Street Map）。所以可以通过搭建自己的 tiles-server 以替代直接使用 Mapbox 的在线地图服务。</p>\n<p>这样做的好处是显而易见的：一是可以通过负载均衡等手段提高数据接口的访问速度，有效提高数据的加载速度；一是保障应用能在零带宽的环境下仍能有效部署和使用。</p>\n<p>这里墙裂安利一个docker开源镜像：openmaptiles-server ，在其 <a href="https://openmaptiles.com/server/">官网</a> 和 <a href="https://hub.docker.com/r/klokantech/openmaptiles-server/">dockerhub</a> 上均可下载。个人认为其最大的亮点在于——即使不了解内部实现，也不影响其使用。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/omts_site-32f8989ba2252edda7cdd83d0ef4000b-ce9bf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1199px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 79.06588824020017%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y52SaU8TYRDH+w1LaX3hRS+ICvG2JxItkCJoYmIUjSZFJQK+8IVFv1OPbffu7rbd/p2ZbbdQNFU3+WXmmeM/8zzZSDRZxMMnr3Ez/wI3cs+Rur2NRGYdCxSPpctYJD+xsoFra1u4srqJJcpfvlUJzmQT2XVcXa1I7yWqi0STecRSRWoskUBJ/IVUgRoqSN7ZxvKDZ1h5tIssWW7M3KtKLpYuIrH8mPrK0hsnYSYSXcpBRNMFsjkS4wEF2mQTmftVEtoRy+cs2dTdLVxfeyp1i9mSCDPxbBlxEo7Ujr7j4PgUH09+gP2AOmrH9TD+6etPsXyW3FE99A9OThFo1KUmMhwMwPQ9D4N+X3y2E87Gz9b9KR8KWqaJdqsVorTbaDWbaJEvdgzHm40GGgSfuVbXtKkgq7eoqNtVoSidkE6nK/G2otAwCxo1qapGA7i2K3GOmbQIY1nWVJATE1RVhUrWtmy4jiPwtUzDlJym6dB1XXwWnvQZhjEV5MkB6rhAF2zbhtPrBYK0BedYzKEhHHfGAxnPdc+/4QRu6pKwThvNwkPZcp6fQ6Frz/ZfEHxz+A077w5R3f+MyqsaNl5+QGHvrZDf3Q99Zu/9l/mCnteH16ffg3BcD3bPIXqwCMO0yXclx3DtXEF/6GM0Ggm+78Olt/HoDR2X3ooYDofn8n8lOPuxkOP0LsT/WVA3gt9hgj62vN1/Cc77fif4C5z6WSbrIpiZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="openmaptiles.com"\n        title=""\n        src="/static/omts_site-32f8989ba2252edda7cdd83d0ef4000b-ce9bf.png"\n        srcset="/static/omts_site-32f8989ba2252edda7cdd83d0ef4000b-33331.png 300w,\n/static/omts_site-32f8989ba2252edda7cdd83d0ef4000b-581a5.png 600w,\n/static/omts_site-32f8989ba2252edda7cdd83d0ef4000b-ce9bf.png 1199w"\n        sizes="(max-width: 1199px) 100vw, 1199px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>运行 tiles-server 服务的 docker 命令如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ docker run --rm -it -v $(pwd):/data -p 8080:80</code></pre>\n      </div>\n<p>然后剩下来需要做的事情就是打开其导航页面 <a href="http://localhost:8080/">http://localhost:8080/</a>（端口号取决于你的启动命令），然后跟着页面上的提示一步一步设置就好了（最后一步设置后会从OSM自动下载地图，所以一开始你不用担心数据从哪来），完全是傻瓜式的部署。</p>\n<h1>四、性能调优</h1>\n<p>在 Mapbox GL 实践的过程中，发现了一些影响应用整体性能的因素，故而在此陈述一番，为之后填坑的童鞋提供一些经验：</p>\n<ol>\n<li>\n<p>使用geo数据（如 GeoJson 格式数据）来定义图形的时候，若数据量过大，则会拖慢数据加载的速度，此时可考虑：</p>\n<ul>\n<li>在 http 请求前后对数据进行合理的压缩和解压，以尽可能节省 http 请求传输的数据量</li>\n<li>条件允许的情况下，可将一组数据分片加载，以空间换时间</li>\n</ul>\n</li>\n<li>\n<p>在 Mapboox 中绘制的图层不宜过多，一是不方便管理（当然，github上有很多管理Mapbox图层的第三方工具），一是图层过多会明显降低GL的渲染和响应性能。所以在绘制图形前，可以先考虑一下图层的划分，以最少的图层实现尽可能多的效果。</p>\n</li>\n<li>\n<p>数据量相同的情况下，使用 <code>mapboxgl.Marker</code> 来添加标记，其性能不如使用 <code>type</code> 为 <code>symbol</code> 类型的图层来添加标记。原因在于前者生成的标记是一个个 DOM 元素，如果你可以想象在一个 web 页面中同时操作成百上千个 DOM 节点会是什么结果，那么你或许能明白我的建议。</p>\n</li>\n</ol>\n<h1>五、一点总结</h1>\n<p>最后，在此总结下个人对 Mapbox 的一些感观。</p>\n<p>Mapbox 的产品定位是随时随地的 GIS（跨平台、应用），它为我们提供了一系列的简单操作的 API，使得 GIS 开发变得灵活而有趣。尤其对于开发 GIS 类型的数据可视化应用，Mapbox 是绝佳的选择。</p>\n<p>然而，如果你只是为了那些绚丽的 3D 效果的话，或许选择专门的框架更为合适。</p>',fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结",date:"2018-01-08",catalog:"可视化",author:"矮大紧的日常"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-08-mapbox-gl-js/"}}}});
//# sourceMappingURL=path---2018-01-08-mapbox-gl-js-66e7438167bdf0ba7599.js.map