# 错误监控

## 前置知识

### (1) 事件

```
事件
- addEventListener 绑定事件监听函数
- removeEventListener 移除事件监听函数
- dispatchEvent 触发事件
---

1
addEventListener
- targeDOM.addEventListener(type, listener[, useCapture])
  - type: 事件名称
  - listener: 监听函数
  - useCapture: 是否在捕获阶段触发 -- (1.可以是boolean值，表示是否在捕获阶段触发) (2.也可以是一个配置对象，具有capture, once, passive 等属性)
- this
  - 普通函数中的this，调用时确定指向，监听函数是绑定在dom上的，所以this指向该dom

2
绑定事件监听函数的 三种方法
- HTML的 on 属性 ------------------ 只在冒泡阶段触发 -- 扩展: 错误捕获的 window.onerror 和 window.addEventListener('error') 触发阶段不同
- 元素节点的事件属性 ---------------- 只在冒泡阶段接触，同一个DOM不能绑定多个监听函数
- EventTarget.addEventListener --- 可以设置 冒泡阶段 或 捕获阶段 useCapture|config.capture
- 总结
  - <body onload="doSomething()"> --- 违反js和html分离的原则，只能在冒泡阶段触发
  - window.onload = doSomething; ---- 一个DOM节点只能绑定一个事件监听函数，只能在冒泡阶段触发
  - EventTarget.addEventListener() -- 1.一个DOM节点，可以绑定多个监听函数 2.可以设置事件触发的阶段 3.接口统一
- 扩展
  - window.onerror ------------------- 只能绑定一个事件监听函数，并且只能在冒泡阶段触发
  - window.addEventListener('error') -- 1.一个DOM节点，可以绑定多个监听函数 2.可以设置事件触发的阶段 3.接口统一

3
事件传播
- capture 捕获阶段: window -> document -> html -> body -> 目标节点
- target 目标阶段: target节点
- bubble 冒泡阶段: 目标节点 -> body -> html -> document -> window
```

### (2) 白屏时间 和 首屏时间

```
白屏时间: 从 ( 浏览器输入网址 ) 到 ( 浏览器页面有内容展示出来 ) 之间的时间
首屏时间: 从 ( 浏览器输入网址 ) 到 ( 浏览器首屏内容渲染完毕 ) 之间的时间
---

1.1
白屏时间 = 把 ( 资源的加载全部放在head标签内 )，然后在head标签的 ( 最上面 和 最下面 ) 打上 timestamp，计算差值


1.2
白屏时间 = domLoading - fetchStart
const timing = window.performance.timing;
const time = timing.domLoading - timing.fetchStart;

2
首屏时间 = 白屏时间 + 首屏渲染时间
首屏时间 =  html结尾打上时间戳 - head头部打上时间戳
```

### (3) try...catch

```
1. try...catch 能捕获promise中的错误吗？
- 不能
- 因为 try...catch 只能获取 ( 同步代码 ) 中的错误，而 promise 是异步任务

2. 为什么 try...catch 可以捕获 await 中的错误？
- 因为 await 是一个语法糖，它会检查 promise 中的状态，当rejected时，会 throw error，当然就能被 catch 所捕获
```

## (一) 错误类型

```
错误类型
- 运行时错误: TypeError ReferenceError RangesError SyntaxError EvalError URIError
- 资源加载错误: js css 图片 等
```

## (二) 错误相关的事件

```
window.onerror
- 不能捕获 ( 资源请求错误 )，因为资源加载错误不会冒泡
- 可以捕获 异步 setTimeout 的错误
- 不能捕获 异步 promise 中的错误

window.addEventListener
- 可以捕获捕获 ( 资源请求错误 )，window.addEventListener('error', ()=>{}, true)
- 可以捕获 异步 setTimeout 的错误
- 不能捕获 异步 promise 中的错误

img/script
- object.onerror
- 资源加载可以单独设置，比如 img.onerror
- 但是一个项目可能有成百上千的资源加载，不能每个都单独设置，所以我们用 window.addEventListener('error', ()=>{}, true)

unhandledrejection
- 捕获promise中的错误
---

1
window.onerror
- 函数签名
  - function(message, source, lineno, colno, error)
  - message: 错误信息 string
  - source: 发生错误的脚本url
  - lineno: 发生错误的 行号
  - colno: 发生错误的 列号
  - error: Error对象
- 跨域
  - window.onerror 只能用于同域的脚本，如果需要跨域，需要做两件事情
  - 1. 设置crossorigin: <script type="text/javascript" src="..."  crossorigin></script>
  - 2. 设置cors: 允许所有域跨域 Access-Control-Allow-Origin:*
- 优点
  - 可以捕获异步 setTimeout 中的错误
- 缺点
  - 1. 不能绑定多个监听函数，比如: 不能通过 ( 不同的文件 ) 绑定 ( 不同的监听函数 )
  - 2. 只能在事件的 ( 冒泡阶段 ) 触发
  - 3. 不能捕获异步 promise 中的错误
  - 4. 不能捕获网络中的错误(资源加载错误)
    - 因为网络请求异常不会冒泡，应此需要在事件捕获阶段才能获取到，即分别在比如 img 和 script 标签中添加 onerror 事件，获取 img.addEventListener()
    - 所以可以通过 window.addEventListener('error') 捕获网络错误

2
unhandledrejection 事件
- 触发
  - 当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件
  - 可以将unhandledrejection捕获到的错误throw出来让error进行捕获之后统一上报。

3
object.onerror
// DOM.addEventListener('error', ()=> {}, false)
- img
- script
- img标签和script标签可以单独添加 error 事件，来捕获图片和脚本这样的 资源加载错误
- 原理: 资源加载错误，并不会向上冒泡，object.onerror捕获后就会终止，所以window.onerror并不能捕获资源加载错误
```

## (2) 上报

```
上报方式
- ajax 上报
- img 上报
- Navigator.sendBeacon 上报
---

1
ajax上报
- 缺点: 不能跨域
- 缺点: 如果 ajax 有可能没上报完，页面就卸载了导致请求中断，上报发生错误


2
img上报
- 优点: img的src属性可以跨域
- 缺点: img上报是 get 请求，url是有长度限制的
- 扩展: ( script的src属性，img的src属性，link的href属性 ) 都可以跨域
- 扩展
  - 问题: ( img.src script.src link.href ) 都能跨域，为什么选择 img 呢？
  - 回答:
    - script.src/link.href: 因为需要将标签挂载到页面上(就会存在反复操作DOM的消耗，性能差)，不挂载就不会发起请求
    - img.src: 不需要挂载到页面上，就能发送请求


3
Navigator.sendBeacon 上报
- navigator.sendBeacon(url, data);
- 通过 HTTP POST 将少量数据 异步 传输到 Web 服务器
- https://juejin.cn/post/7251935816728739897
- 特点
  - 异步请求，并且是POST请求
  - 发出的请求，脱离当前页面(被放到的浏览器任务队列执行的，)，所以 ( 不会阻塞当前页面的卸载 )和 ( 后面页面的加载过程 )，用户体验较好；
```

## 资料

- 重要
  - 谷歌标准: https://juejin.cn/post/7218121928799764535
  - 各种时间的计算: https://juejin.cn/post/6844904020482457613
- 自己
  - [bad.js 源码分析](https://github.com/woow-wu7/7-badjs-report-source-code-analysis)
  - https://juejin.cn/post/7185871994624147512
  - https://juejin.cn/post/6867773840768909326
