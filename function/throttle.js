// 函数节流
// 解决 函数被触发过于频繁的问题


var throttle = function (fn, interval) {
    var self = fn, timer = null, firstRun = true;
    return function () {
        if (firstRun) {
            self.apply(this, arguments)
            return firstRun = false
        }
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            self.apply(fn, arguments)
        }, interval || 500);
    }
};
var i = 0;
var test = throttle(function () {
    console.log(Date.now())
})

test()
test()
test()

