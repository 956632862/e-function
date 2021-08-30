/**
 * 格式化函数
 */

/**
 * @description 根据rawFormat，targetFormat 格式化数据并且返回新的数组
 * @param items []
 * @param rawFormat []
 * @param targetFormat []
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
