// 函数作为返回值输出

//判断数据的类型
var isType = function (type) {
    return function (obj) {
        console.log(Object.prototype.toString.call(obj))
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

var isArray = isType('Array');
var isString = isType('String');
console.log(isArray([]), isString('abc'))