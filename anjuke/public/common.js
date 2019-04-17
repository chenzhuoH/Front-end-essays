Buffer.prototype.split = Buffer.prototype.split || function (spilter) {
    let buf = this;
    let result = [];
    while ((i = buf.indexOf(spilter)) != -1) {
        result.push(buf.slice(0, i));
        buf = buf.slice(i + spilter.length);
    }
    result.push(buf);
    return result;
}

exports.parseDescription = function (description) {
    let desc = description.split('; ');
    let json = {};
    let info = [];

    desc.forEach(item => {
        info = info.concat(item.split('\r\n'));
    });
    console.log(info);
    info.forEach(item => {
        let [key, val] = item.split(/=|: /);
        if (val) {
            json[key] = val.replace(/"/g,'');
        }
    });
    return json;
}