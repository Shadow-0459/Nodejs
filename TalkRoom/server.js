var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');//得出mine类型能力
var cache = {};//缓存文件内容对象
function send404(response){
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404 : resource not found');
    response.end();
}
function sendFile(response,filePath,fileContents){
    response.writeHead(200,{"Content-Type":mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}
function serveStatic(response,cache,absPath){
    if(cache[absPath]) {
        sendFile(response,absPath,cache[absPath]);
    } else{
        fs.exists(absPath, function(exists){
            if(exists) {
                fs.readFile(absPath, function(err, data){
                    if (err){
                        send404(response);
                    }else {
                        cache[absPath] = data;
                        sendFile(response.absPath,data);
                    }
                });
            }else {
                send404(response);
            }
        });
    }
}
var server = http.createServer(function(request, response){
    var filePath = false;

    if (request.url == '/'){
        filePath = 'public/index.html';
    }else{
        filePath = 'public' + request.url;
    }

    var absPath = './' + filePath;
});

var chatserver = require('./lib/chat_server');
chatserver.listen(server);

server.listen(8000,function(){
    console.log("server listening on port 8000");
});
