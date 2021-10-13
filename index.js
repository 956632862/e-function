// 入口文件
import * as filters from "./utils/filters.js"
import * as util from "./utils/util.js"
import * as formatter from "./utils/formatter.js"
import * as arithmetic from "./utils/arithmetic.js"

export default {
    ...filters,
    ...util,
    ...formatter,
    ...arithmetic
}


