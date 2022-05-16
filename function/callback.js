//回调函数

//使用方法：当一个函数不适合执行一些请求时，可以把这个请求封装成一个函数，并作为参数传给另外一个函数执行；
//例如：异步请求，当执行异步请求完成后，成功和失败通过不同的回调函数传递给具体的执行函数
var getUserInfo = function (userId, callback) {
    var user = userId
    if (user && typeof callback == 'function') {
        callback(user)
    } else {
        // console.log("该用户不存在")
        throw new Error("该用户不存在");
    }
}


getUserInfo('user', function (data) {
    
    console.log(data)
})