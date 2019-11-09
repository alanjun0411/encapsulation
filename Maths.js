
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
//产生一个随机数一维数组
function ArrayRandom(number, min, max) {
    var arr = [];
    if (isNaN(number)) {
        return '输入参数请按照一下格式"数组元素个数,最小值,最大值",只能输入数字';
    } else if (min === undefined && max === undefined) {
        for (var i = 0; i < number; i++) {
            arr[i] = OneRandom(0, 10)
        }
        return arr;
    } else if (isNaN(min) || isNaN(max)) {
        return '输入参数请按照一下格式"数组元素个数,最小值,最大值",只能输入数字haob';
    } else {
        for (var i = 0; i < number; i++) {
            arr[i] = OneRandom(min, max)
        }
        return arr;
    }
}