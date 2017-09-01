var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('HelloWorld-get');
});
app.get('/index.htm',function(req,res){
    res.sendFile(__dirname + "/" + "index.htm");
});
app.get('/process_get',function(req,res){
    var response = {
        "first_name": req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
// app.get('/der',function(req,res){
//     console.log("/der请求");
//     res.send('HelloWorld-der');
// });
// app.get('/list',function(req,res){
//     console.log("/list请求");
//     res.send('HelloWorld-list');
// });
// app.post('/',function(req,res){
//     res.send('HelloWorld-post');
// });


var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例 地址：http://%s:%s",host,port);
})
