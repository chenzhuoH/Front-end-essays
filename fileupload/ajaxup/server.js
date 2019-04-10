let express = require('express');
let multer = require('multer');

let app = express();
let upload = multer({ dest: './upload/' });
app.listen(8081);
//upload.single(filename);upload.array(filename[,count]);upload([{name:'filename',maxCount:number},{name:'filename',maxCount:number}]]);upload.any();
//上传单个指定文件名；指定文件名数组；混合；任何文件
app.post('/upload', upload.any(), function (req, res) {
    console.log(req.files);
    res.send('ok');
});
app.use(express.static('./'));