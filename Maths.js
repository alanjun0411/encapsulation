
//产生一个随机数
//只能输入数字,且必须输入两个值;
//可以反输入,但得到的是两个数之间的值，不包括两个参数值;
//如果输入两个同样的值，只会得到输入的值。
function OneRandom(min, max) {
    if (isNaN(min) || isNaN(max)) {
        return '输入参数请按照一下格式"最小值,最大值",只能输入2个值。';
    } else {
        var onerandom = Math.floor(Math.random() * (max - min + 1) + min);
        return onerandom;
    }
}
//数组随机数
//只能输入数字,最多只能输入四个
// 输入参数请按照一下格式"最小值,最大值,数组元素个数(二维数组X下标),(二维数组Y下标)",只能输入数字
function ArrayRandom() {
    var arr = [];
    var btn = false;
    for (var cunt = 0; cunt < arguments.length; cunt++) {
        if (isNaN(arguments[cunt])) {
            btn = true;
        }
    }
    if (btn) {
        alert("请输入数值!!!");
    } else if (arguments.length >= 5) {
        alert("最多输入4个数值!!!");
    } else {
        if (arguments.length === 0) {
            return OneRandom(0, 10);
        } else if (arguments.length === 1) {
            for (var i = 0; i < arguments[0]; i++) {
                arr[i] = OneRandom(0, 10)
            }
            return arr;
        } else if (arguments.length === 2) {
            return OneRandom(arguments[0], arguments[1]);
        } else if (arguments.length === 3) {
            for (var i = 0; i < arguments[2]; i++) {
                arr[i] = OneRandom(arguments[0], arguments[1]);
            }
            return arr;
        } else if (arguments.length === 4) {
            for (var i = 0; i < arguments[3]; i++) {
                arr[i] = [];
                for (var j = 0; j < arguments[2]; j++) {
                    arr[i][j] = OneRandom(arguments[0], arguments[1]);
                }
            }
            return arr;
        }
    }
}