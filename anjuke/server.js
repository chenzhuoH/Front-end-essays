const http = require('http');
const queryString = require('querystring');
const common = require('./common/common');
const fs = require('fs');

http.createServer(function (req, res) {
    let tempBuffer = [];
    req.on('data', data => {
        tempBuffer.push(data);
        //console.log(tempBuffer.toString());
    });
    req.on('end', () => {
        let data = Buffer.concat(tempBuffer);
        let post = {};
        //console.log(req.headers);
        if (req.headers['content-type'].startsWith('multipart/form-data')) {
            let spilter = '--' + req.headers['content-type'].split('; ')[1].split('=')[1];
            let postContent = data.split(spilter);
            //console.log(postContent);
            postContent.shift();
            postContent.pop();
            //console.log(postContent);
            postContent = postContent.map(item => item.slice(2, item.length - 2));
            //console.log(postContent.toString());
            postContent.forEach(item => {
                let description = item.slice(0, item.indexOf('\r\n\r\n')).toString();
                let value = item.slice(item.indexOf('\r\n\r\n') + 4);
                if (description.indexOf('\r\n') == -1) {
                    let jsonDesc = common.parseDescription(description.toString());
                    console.log("普通数据:",jsonDesc);
                    post[jsonDesc.name] = value.toString();
                } else {
                    let jsonDesc = common.parseDescription(description.toString());
                    let fileName = jsonDesc.filename;
                    let type = jsonDesc['Content-Type'];
                    console.log("文件:",jsonDesc,fileName,ty);
                }
            });
            console.log(post);
        } else {
            let post = queryString.parse(data.toString());
            console.log(post);
        }
    });
}).listen(8081);

