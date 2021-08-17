/**
 * 过滤器函数
 */

// 转换手机号码中间四位
export function telFormat(mobile){
    return mobile.substring(0, 3) + '****' + mobile.substring(7)
}

// 截取数字的后面四位
export function formatFour(data){
    const sliceData = String(data)
    return sliceData.substring(sliceData.length-4, sliceData.length)
}

// 格式化日期,只拿年月日
export function timeFormat(time){
    return time.substring(0,10)
}

