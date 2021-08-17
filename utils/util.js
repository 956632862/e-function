/**
 * 日常使用函数
 */

// 获取数据类型
export function getDataType(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

// 判断数据是空
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
