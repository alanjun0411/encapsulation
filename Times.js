//获取时间
function time() {
    let date = new Date();
    let year = date.getFullYear();
    let month = ling(date.getMonth() + 1);
    let day = ling(date.getDate());
    let hour = ling(date.getHours());
    let minute = ling(date.getMinutes());
    let second = ling(date.getSeconds());
    return date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}