# e-function
`e-function`收集了一些日常开发经常使用的工具（函数），为打工人提供开箱即用的各种函数 。
## 说明
目前收集的函数目前存放在`utils`的文件夹下，分别有三个文件，如下，之后由`index.js`
导出
+ `filters.js`  主要为过滤类的函数
+ `formatter.js`    主要为格式化类别的函数
+ `util.js` 主要为日常使用会使用到的函数  
  (以后添加新的函数，也会一一在文档之中说明) 

### [api文档](https://efcuntiondoc.pjemmm.cn/)

## 安装以及使用
安装方式
```js
npm install e-function 
or 
yarn add e-function
```
使用方式目前有两种：
### 1 使用由index.js导出的函数合集
```js
import efunction form "e-function"
```
### 2 使用各个模块自己的函数
```js
import * as  filters form "e-function/utils/filters"
import {telFormat} form "e-function/utils/filters"
```
之后调用相应的函数可。

## 已知可能错误
### 导入依赖包报错Module parse failed
出现这个是因为一些旧的项目并不支持部分ES6语法
在`webpack`的配置中添加当前依赖包即可
```js
module:{
    rules:{
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        include: [ resolve('node_modules/e-function') ]
      },
    }
}
```

