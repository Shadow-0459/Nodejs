var hello = require('./hello');
// hello.world();
// exports.world() = function(){
//     console.log('hello,this is seiki Zhou');
// }
// hello = new Hello();
// hello.setname('sb');
// hello.sayhello()
var http = require('http');
funtion onRequest(request,responce){
    responce.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world");
    responce.end();
}
http.createServer(onRequest).listen(8888);

// function execute(someFunction, value) {
//   someFunction(value);
// }
// 约等于
// execute(function(word){ console.log(word) }, "Hello");
