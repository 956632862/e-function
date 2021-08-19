# easy-function
`easy-function`收集了一些日常开发经常使用的工具（函数），开发这个包的目的在于减少
平常在开发中的重复劳动，提升工作效率。
## 说明
目前收集的函数目前存放在`utils`的文件夹下，分别有三个文件，如下，之后由`index.js`
导出
+ `filters.js`  主要为过滤类的函数
+ `formatter.js`    主要为格式化类别的函数
+ `util.js` 主要为日常使用会使用到的函数  
  (以后添加新的函数，也会一一在文档之中说明)  
## 安装以及使用
安装方式
```js
npm install easy-function 
or 
yarn add easy-function
```
使用方式目前有两种：
### 1 使用由index.js导出的函数合集
```js
import efunction form "easy-function"
```
### 2 使用各个模块自己的函数
```js
import filters form "easy-function/utils/filters"
import {telFormat} form "easy-function/utils/filters"
```
之后调用相应的函数可。

