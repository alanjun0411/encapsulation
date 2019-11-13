//驼峰命名str表示字符串，num值（0或1）表示第一个字符串的第一个字符是否大写
function HumpName(str, num) {
    let arr = str.split(' ');
    if (num !== 1) {
        num = 0;
    }
    for (let i = num; i < arr.length; i++) {
        arr[i] = arr[i].substring(1, 0).toUpperCase() + arr[i].substring(1);
    }
    return (arr.join(''));
}