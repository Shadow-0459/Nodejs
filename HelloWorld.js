//1
// var http = require("http");
// http.createServer(function(request,response){
    // response.writeHead(200,{'Content-Type':'text/plain'});
    // response.end("HelloWorld");
// }).listen(8888);

//2阻塞调用
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());
// console.log("over");

//3非阻塞调用
// var fs = require("fs");
// fs.readFile('input.txt',function(err,data){
//     if(err) return console.log("errrrrr");
//     console.log(data.toString());
// });

//4事件循环
// var events = require('events');// 引入 events 模块
// var eventEmitter = new events.EventEmitter();// 创建 eventEmitter 对象
// var connectHandler = function connected() {// 创建事件处理程序
//    console.log('连接成功。');
//    // 触发 data_received 事件
//    eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection', connectHandler);// 绑定 connection 事件处理程序
// eventEmitter.on('data_received', function(){// 使用匿名函数绑定 data_received 事件
//    console.log('数据接收成功。');
// });
// eventEmitter.emit('connection');// 触发 connection 事件
// console.log("程序执行完毕。");

//5EventEmitter
//server.on('connection',callback);
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }
// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }
// // 绑定 connection 事件，处理函数为 listener1
// eventEmitter.addListener('connection', listener1);
// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);
// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");
// // 处理 connection 事件
// eventEmitter.emit('connection');
// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");
// // 触发连接事件
// eventEmitter.emit('connection');
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");
// console.log("程序执行完毕。");

//6
var buf = new Buffer(10);
// var buf = new Buffer([10,20,30,40,50]);
// var buf = new Buffer('www.rails.com',"UTF-8");
var len = buf.write("www.rails.com");
console.log("写入字符数 ： " + len);
