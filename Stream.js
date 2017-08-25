//1 读取
// var fs = require("fs");
// var data = '';
//
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF-8');
//
// readerStream.on('data',function(chunk){
//     data += chunk + 'a';
// });
//
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error',function(err){
//     console.log(err.stack);
// })
// console.log('over!');

//2.写入
// var fs = require("fs");
// var data = '菜鸟教程官网地址：www.runoob.com';
//
// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt');
//
// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');
//
// // 标记文件末尾
// writerStream.end();
//
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });
//
// writerStream.on('error', function(err){
//    console.log(err.stack);
// });
//
// console.log("程序执行完毕");
//3.管道流
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
