// console.log(__filename);//全局变量 __filename 的值
//
//
// console.log( __dirname );// 输出全局变量 __dirname 的值
// function printHello(){
//    console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// var t = setTimeout(printHello, 2000);
// clearTimeout(t);
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);
