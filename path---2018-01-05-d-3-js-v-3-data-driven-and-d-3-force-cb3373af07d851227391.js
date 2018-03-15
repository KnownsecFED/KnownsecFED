webpackJsonp([0xfe92ae2329a8],{526:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-05-d3-js-v3-data-driven-and-d3-force/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-2f89ce891a8547bbbb1f15baea3701d4-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAHQI7cUHGL/xAAbEAACAQUAAAAAAAAAAAAAAAABAgADERIhMf/aAAgBAQABBQK4KoymdlTTkDEz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAgEFAQAAAAAAAAAAAAAAAAERAhAhQWJx/9oACAEBAAY/AnUlsfsGEKOr/wD/xAAaEAADAQADAAAAAAAAAAAAAAABESEAQVFx/9oACAEBAAE/IVxRAvc+wWQ7OTOGlwFAwhoAc4yDCt//2gAMAwEAAgADAAAAEEw//8QAFxEAAwEAAAAAAAAAAAAAAAAAEBEhcf/aAAgBAwEBPxBzB//EABcRAQADAAAAAAAAAAAAAAAAAAABITH/2gAIAQIBAT8QjVP/xAAcEAEAAwADAQEAAAAAAAAAAAABABEhQVGRMWH/2gAIAQEAAT8QHQCnke35bFbjSZnKPj5FIBTiJOd5nAUMZquCqKtr7KGw6Gp//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-2f89ce891a8547bbbb1f15baea3701d4-d6978.jpeg"\n        srcset="/static/header-2f89ce891a8547bbbb1f15baea3701d4-527f0.jpeg 300w,\n/static/header-2f89ce891a8547bbbb1f15baea3701d4-9a7cd.jpeg 600w,\n/static/header-2f89ce891a8547bbbb1f15baea3701d4-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>D3 是什么</h2>\n<p>D3 的全称：Data-Driven Documents，被 <em>数据驱动</em> 的文档，其实就是用来做数据可视化的 JavaScript 库。</p>\n<h2>为什么需要学习使用 D3</h2>\n<p>首先 D3.js 是一个数据可视化 js 库，结合 HTML，SVG，CSS，canvas，D3 可以图形化的、生动的展现数据。目前有 <em>v3</em> 和 <em>v4</em> 两个版本，v3 是基于 SVG，v4 做了些性能上的提升，已经支持 canvas 了，这样也就减少了很多 DOM 操作。</p>\n<p>在数据可视化方面，已经封装了许多可视化 API 方法，大大减少了开发者的工作量。同时，它也具有高定制性、代码简洁、有研究趣味的特点。</p>\n<p>D3.js 目前托管于 <a href="https://github.com/d3/d3"><em>GitHub</em></a> ，star 量高达 71.4k(恐怖如斯)，赶快学习 D3 吧，学习还能使我快乐。</p>\n<h2>核心：数据驱动 (Data-Driven)</h2>\n<p>何谓数据驱动？</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/question-d23b182c54cf73c17e478cd55bbe8ebb-b24b3.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 400px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdSjG3DoJeBUD//EABwQAAICAgMAAAAAAAAAAAAAAAEDAAIQEQQSIf/aAAgBAQABBQLvoU0KRLGW5GGeQE4//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAgEEAwAAAAAAAAAAAAAAASEQAAIRExIxcf/aAAgBAQAGPwI38kRnyhjqBrB0EpSjhUGXH//EABkQAQEBAQEBAAAAAAAAAAAAAAERIRAA0f/aAAgBAQABPyGqxgiYJ46HFLzQgAOMPvamwFh6k8n/2gAMAwEAAgADAAAAEDAPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABsQAAMAAwEBAAAAAAAAAAAAAAERIRAxQQBh/9oACAEBAAE/EGkMQ01EFSVbOeHNEBG3XN6wshOADCQUwOBrmTUQgkDzmIGbXzH/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="question"\n        title=""\n        src="/static/question-d23b182c54cf73c17e478cd55bbe8ebb-b24b3.jpeg"\n        srcset="/static/question-d23b182c54cf73c17e478cd55bbe8ebb-ce4fe.jpeg 300w,\n/static/question-d23b182c54cf73c17e478cd55bbe8ebb-b24b3.jpeg 400w"\n        sizes="(max-width: 400px) 100vw, 400px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>其旨在将数据与图形绑定，图形又等同于可视化元素，所以也可称作为将数据与可视化元素绑定。这里的可视化元素指的就是 HTML 标签、canvas 绘制的图形、SVG 的形状元素。</p>\n<p>D3 通过 enter()、exit()、data()三个方法得到的数据集与选择元素 (selection) 绑定。\n下面就来了解下这个机制（声明 DOM 对象集 => 声明数据集 => 比较获取缺失的 DOM 集 => 追加 DOM 对象并设置其属性）：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">\'#chart\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span>    <span class="token comment">// 得到可视化元素，返回一个 DOM 对象集，和 jQuery 选择器类似</span>\n  <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>      <span class="token comment">// 为选中的可视化元素绑定数据集, 必须传入数组</span>\n  <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 返回数据集比 DOM 集多出的数据，并得到数据集与可视化元素的对应关系</span>\n  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span> <span class="token comment">// 创建上一步缺失的 DOM 对象</span>\n  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">)</span> <span class="token comment">// 设置 DOM 元素属性，如果传入的是一个函数，那么将遍历每个 enter 返回的数据集中的元素，并执行</span>\n  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'class\'</span><span class="token punctuation">,</span> <span class="token string">\'testClass\'</span><span class="token punctuation">)</span> <span class="token comment">// 设置 DOM 元素属性</span>\n</code></pre>\n      </div>\n<h3>exit() 和 enter() 讲解</h3>\n<p>例有如下 DOM 结构, 数据集 data 为 [1,2,3]：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>执行:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">\'#chart\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'class\'</span><span class="token punctuation">,</span> <span class="token string">\'enterClass\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>代码之后，将会得到如下 DOM 结构：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>enterClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>enterClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>而执行:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">\'#chart\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'class\'</span><span class="token punctuation">,</span> <span class="token string">\'exitClass\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>代码之后，将会得到如下 DOM 结构：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>exitClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>但是两个种方法都没有得到我想要的结果，结果与数据不匹配，这个时候就需要考虑 enter() 与 exit() 结合使用：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> update <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">\'#chart\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdate<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdate<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdate<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>d <span class="token operator">=></span> d<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'class\'</span><span class="token punctuation">,</span> <span class="token string">\'corrcet\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>最后，得到与 data 数据集 [1,2,3] 匹配的 DOM 结构：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>correct<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>correct<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>correct<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>Force 力学图，让你实现酷炫的打击效果</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>force<span class="token punctuation">.</span><span class="token function">nodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 节点数组</span>\nforce<span class="token punctuation">.</span><span class="token function">links</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 节点间的链接数组, 其数据结构固定为 [{ source:1(index),target:0(index) }]</span>\nforce<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'tick\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 运动进行中如何更新每一帧</span>\nforce<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 因为 tick 事件会自动停止，resume 方法让 tick 事件不停止</span>\nforce<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 将链接数组中的值 (index) 转化为节点数组中对应索引的值</span>\n</code></pre>\n      </div>\n<p>大家都知道，一个点运动到另外一个点，就可以得到一条运动轨迹，这条运动轨迹也是由一个个像素点构成的，Force 恰恰做了这个事情。接着，我们就可以用所有的像素点去实现出酷炫的效果。</p>\n<h3><em>tick</em> 事件内部解析</h3>\n<p>如果你去读 <em>tick</em> 事件的源码，你会发现有一个 alpha 变量控制的 <em>tick</em> 事件的生命周期，这个变量会自动衰减为 0。当我们使用 force.resume() 时，就会让这个变量一直趋于 0，让 <em>tick</em> 不会停止。每一次 <em>tick</em> 都是两个点在互相往中间靠拢，这个时候，我们需要选择固定一个点 (设置该状态的坐标为初始坐标)，达到一个点移动到另一个点的效果。</p>\n<p>只要你传入正确类型的 nodes 和 links，那么 Force 就会在 <em>tick</em> 事件中默认画出我们看不见的运动轨迹，而我们需要做的就是在每次 <em>tick</em> 事件中去存储每一个像素点，然后再根据存储到的像素点去实现效果。</p>\n<h3>D3 的高度自由性与研究趣味</h3>\n<p>从这个效果来看，我觉得基于这些像素点，可以有多种方式去实现一种功能。因为得到的是最基础底层的数据，而很多封装的API方法其实底层也是根据这个数据去处理得到最后的效果。可以使用 canvas 的 moveto() 和 lineTo() 来画线；也可以直接使用 SVG 的 line 来实现，当然还有其他方法，可以一起探讨。</p>',fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解",date:"2018-01-05",catalog:"可视化",author:"cuitfanshide"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"}}}});
//# sourceMappingURL=path---2018-01-05-d-3-js-v-3-data-driven-and-d-3-force-cb3373af07d851227391.js.map