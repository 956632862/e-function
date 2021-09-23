/**
 * 日常使用函数
 */

// 获取数据类型
export function getDataType(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

// 判断数据类型，首字母大写
function checkType(data,type) {
    return getDataType(data) === type
}

// 复制文本
export function copyText(text = ''){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
}

// 判断数据是空 空为true
export function isEmpty(data){
    // 先判断空数组或者空对象
    getDataType(data) === 'Object' && (data = Object.keys(data))
    if (getDataType(data) === 'Array') return data.length === 0
    return !data
}

// 深层拷贝
export function deepClone(target = null){
    const whiteType = ['Object','Array']
    if (!whiteType.includes(getDataType(target))) return target
    if (isEmpty(target)) return target
    const _deepData = Array.isArray(target) ? [] : {}
    for (const deepDataKey in target) {
        if (target.hasOwnProperty(deepDataKey)){
            const type = getDataType(target[deepDataKey])
            _deepData[deepDataKey] = whiteType.includes(type) ? deepClone(target[deepDataKey]) : target[deepDataKey]
        }
    }
    return _deepData
}

/**
 * @description 防抖：在事件被触发n秒之后再执行，如果再次触发，就重新计时,必须先定义，再执行
 * @param cb 回调函数
 * @param delay
 * @return function cb
 */
export function debounce(cb,delay = 1000){
    let id = null
    return function () {
        if (id) clearTimeout(id)
        id = setTimeout(()=>{
            cb()
        },delay)
    }
}

/**
 * @description 节流：在一段时间内，函数只能触发一次
 * @param cb 回调函数
 * @return function cb
 */
export function throttle(cb,delay=1000){
    let last, deferTimer
    return function (args) {
        let that = this
        let _args = arguments
        let now = +new Date()
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(  function () {
                last = now
                cb.apply(that, _args)
            }, delay)
        }else {
            last = now
            cb.apply(that,_args)
        }
    }
}


// 判断设备
export function getUserAgent() {
    let u = navigator.userAgent
    let ua = navigator.userAgent.toLocaleLowerCase()
    let result = {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // IOS终端
        android: u.indexOf('Android') > -1, // 安卓终端
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iphone或QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否为iPad
        webApp: u.indexOf('Safari') === -1, // 是否web应用程序，没有头部与底部
        QQbrw: u.indexOf('MQQBrowser') > -1, // QQ浏览器
        weiXin: u.indexOf('MicroMessenger') > -1, // 微信
        alipay: u.indexOf('AlipayClient') > -1, // 支付宝
        QQ: ua.match(/QQ/i) === 'qq', // QQ
        weiBo: ua.match(/WeiBo/i) === 'weibo', // 微博
        ucLowEnd: u.indexOf('UCWEB7.') > -1, //
        ucSpecial: u.indexOf('rv:1.2.3.4') > -1,
        webview: !(u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/)) && u.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        ucweb: (function() {
            try {
                return parseFloat(u.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
            } catch (e) {
                if (u.indexOf('UC') > -1) {
                    return true
                }
                return false
            }
        }()),
        Symbian: u.indexOf('Symbian') > -1,
        ucSB: u.indexOf('Firofox/1.') > -1
    }
    return result
}
