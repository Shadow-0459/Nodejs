// var fs = require("fs");
// console.log("dakaiwenjian!@");
// fs.open("input.txt",'r+',function(err,fd){
//     if(err){
//         return console.error(err);
//
//     }
//     console.log("wenjiandakiacehnggong");
// });
//
// fs.stat('input.txt',function(err,stats){
//     console.log(stats.isFile());
// }

var fs = require("fs");
console.log("go");
fs.writeFile('input.txt',"hellollllllllllllllllllll",function(err){
    if(err){
        return console.error(err);
    }
    console.log("sucess");

    fs.readFile('input.txt',function(err,data){
        if (err){
            console.error(err);
        }
        console.log(data.toString());
    })
})
