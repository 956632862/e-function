/**
 * @description 快速排序
 */
export function quickSort(array){
    /**
     * 快排基本思想：采用分而治之的方法来对数据进行排序
     * 步骤：
     * 1 取一个数组之中的基准值
     * 2 划分出 左，右 数组
     * 3 以基准值为分界，将比基准值大放进左边，小的放进右边
     * 4 分别对左右数组进行单独排序
     * 5 将基准值添加进行数据之后进行合并
     */
    if (!(array instanceof Array) || array.length < 2) return array

    // 取基准值
    const rand = array[array.length - 1]
    // 划分左右数组，将相对与基准的大小数据分别划分进相应的数据中
    let right=[],left = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > rand){
            right.push(array[i])
        }
        if (array[i] < rand){
            left.push(array[i])
        }
    }
    left = left.sort((a,b) => a-b)
    right  = right.sort((a,b) => a-b)
    left.push(rand)
    return left.concat(right)
}

/**
 * @description 冒泡排序
 */
export function bubbleSort(array){
    /**
     * 冒泡排序基本思想：将数组中的相邻元素两两比较，如果后面比前面小的，交换位置
     * 步骤：
     * 1 进行双重循环
     * 2 比较当前位置元素与后一个元素大小，如果当前的元素较大就与后面交换位置
     */
    if (!(array instanceof Array) || array.length < 2) return array
    const length = array.length
    let value = null
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] >  array[j+1]){
                value = array[j]
                array[j] = array[j+1]
                array[j+1] = value
            }
        }
    }
    return array
}

/**
 * @description 插入排序
 */
export function innerSort(array){
    /**
     * 插入排序基本思想：将当前位置的元素与后面所有元素进行比较，如果出现比当前元素小的，就交换位置
     * 1 双重循环
     * 2 拿到当前元素与后面元素进行比较，如果后面的元素小的交换位置
     */
    let index_value =null
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]){
                index_value = array[i]
                array[i] = array[j]
                array[j] = index_value
            }
        }
    }
    return array
}

/**
 * @description 选择排序
 */
export function selectSort(array){
    /**
     * 选择排序基本思想：先找出最大或者最小的数，然后将其放入新的数组
     */
    let sort_array =[]
    let index_value = null
    for (let i = 0; i < array.length; i++) {
        index_value = array[i]
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]){
                index_value = array[j]
                array[j] = array[i]
                array[i] = index_value
            }
        }
        sort_array.push(index_value)
    }
    return sort_array
}
