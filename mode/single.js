//单利

var getSingle = function (fn) {
    var ret;
    return function () {
        console.log((ret = fn.apply(this, arguments)))
        return ret || (ret = fn.apply(this, arguments))
    }
}


var getUserInfo=getSingle()