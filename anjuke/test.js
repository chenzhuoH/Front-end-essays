let split = function () {
    /* let buf = 'erqewr==werqwe=wqer==2df';
    let result = [];
    while ((i = buf.indexOf('==')) != -1) {
        result.push(buf.slice(0, i));
        buf = buf.slice(i + 2);
    }
    result.push(buf);
    console.log(result);
    let arr = [1,2,3];
    console.log(arr.map(item=>item+1)); */
    let str = "dsffsd=sdfge:rtrg:rtrt";
    console.log(str.split(/=|:/));
}();