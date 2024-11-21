# 构建过程

### (1) 安装依赖

```
npm init -y // -y 可以生成默认的package.json配置

npm install webpack -D
npm install webpack-cli -D
npm install webpack-dev-server -D
npm install webpack-merge -D // 合并 webpack 配置，记得一个一个装，一起装有时候会不成功

npm install typescript ts-loader -D // ts相关
npm install babel-loader @babel/core @babel/preset-env -D // --- babel可以把es6转成es5

npm install html-webpack-plugin -D // -------------------------- html模版处理
npm install vue vue-loader vue-template-compiler -D // --------- vue组件处理

npm install style-loader css-loader -D // ---------------------- css样式处理
npm install sass sass-loader node-sass -D // ------------------- sass相关
npm install mini-css-extract-plugin -D // ---------------------- 单独抽离成css文件，以便引入组件库的css，因为css和组件时单独打包的
npm install postcss-loader autoprefixer -D // ------------------ 添加浏览器的前缀，可单独配置 postcss.config.js；autoprefixer需要在package.json中设置 browserslist
// 样式相关注意点
// 1. 使用 mini-css-extract-plugin 后就不需要 style-loader 了
// 2. 顺序: sass-loader > postcss-loader > css-loader > style-loader
// 3. autoprefixer 需要在 package.json 中设置 browserslist

npm install file-loader url-loader -D // ----------------------- 图片/文件处理，url-loader通过limit处理成base64的图片，file-loader在打包后的html中引用打包后的图片路径

npm install clean-webpack-plugin -D ---------------------------- 删除打包后的文件夹，默认是删除 output.path 指定的文件夹，用在再次打包时先删除之间生成的包
npm install eslint eslint-loader eslint-webpack-plugin -D ------ lint，在 .eslintrc.js 中配置规则


Webpack内置组件
- webpack.DefinePlugin() --------------------------------------- 定义浏览器环境变量
- webpack.HotModuleReplacementPlugin() ------------------------- 热更新
- webpack.DllPlugin -------------------------------------------- 生成第三方库的动态链接库 manifest.json
- webpack.DllReferencePlugin ----------------------------------- 引用动态链接库，不存在再进行打包

npm install loader-utils -D ------------------------------------ loader工具，用来获取loader中的options对象
// 注意: webpack 已经有自带的 this.getOptions() 了，就需要安装这个 loader-utils 插件了
```
