//函数柯里化
//部分求值，接受一些参数，不会立即求值，而是一次性求值

var currying = function (fn) {
    var args = []
    return function () {
        if (arguments.length != 0) {
            return Array.prototype.push.apply(args, arguments)
        }
        return fn.apply(this, args)
    }
}
var cost = (function () {
    var count = 0;
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            count += arguments[i]
        }
        return count
    }
})()
var cost = currying(cost);

cost(100); // 未真正求值
cost(200); // 未真正求值 
cost(300); // 未真正求值
cost(500)
cost(-1000)
console.log(cost());
