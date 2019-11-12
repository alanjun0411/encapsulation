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