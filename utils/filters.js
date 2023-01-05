/**
 * 过滤器
 * @module filters
 */

/**
 * @description 转换手机号码中间四位
 * @param mobile 手机号码
 * @return {string}
 */
export function telFormat(mobile){
    return mobile.substring(0, 3) + '****' + mobile.substring(7)
}

/**
 * 截取数字的后面四位
 * @param data 数字
 * @return {string}
 */
export function formatFour(data){
    const sliceData = String(data)
    return sliceData.substring(sliceData.length-4, sliceData.length)
}

/**
 * @description 截取时间前面部分
 * @param time [yyyy-mm-dd hh:ii:ss]
 * @returns {string}
 */
export function timeFormat(time){
    return time.substring(0,10)
}


