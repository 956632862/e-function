/**
 * 格式化函数
 * @module formatter
 */

/**
 * @description 根据rawFormat，targetFormat 格式化数据并且返回新的数组
 * @param items [] 数据
 * @param rawFormat [] 数据中需要获取数据的值 默认 ['name', 'id']
 * @param targetFormat [] 需要在数据中添加的值，字段跟rawFormat一一对应 默认['label', 'value']
 * @example
 * const test = [ { name:'a',id:1 },{ name:'b',id:2 } ]
 * const result = formatItems(test)
 * // result => [ { name:'a',id:1,label:'a',value:1 },{ name:'b',id:2,label:'b',value:2 } ]
 * @returns {*}
 */
export function formatItems(items =[], rawFormat = ['name', 'id'], targetFormat = ['label', 'value']){
    return items.map(item => {
        const res = {...item}
        rawFormat.forEach((f, index) => {
            res[targetFormat[index]] = item[f]
        })
        return res
    })
}
