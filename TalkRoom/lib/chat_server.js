var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function () {
    io = socketio.listen(server);
    io.set('log level', 1);
    io.sockets.on('connection',function (socket) {
        guestNumber = (socket, guestNumber, nickNames, namesUsed);
        joinRoom(socket, 'Lobby');
        handleMessageBroadcasting(socket, nickNames);//处理用户信息，聊天室的创建和变更
        handleNameChangeAttempts(socket, nickNames,namesUsed);
        handleRoomJoining(socket);
        socket.on('room',function(){//提供被占用的聊天室列表
            socket.emit('room',io.sockets.manager.room);
        });
        handleClientDisconnection(socket,nickNames,namesUsed);//定义用户断开连接后的清除逻辑
    });
};

function assignGuestName(socket,guestNumber,nickNames,namesUsed){
    var name = 'Guest' + guestNumber;
    nickNames[socket.id] = name;
    socket.emit('nameResult',{
        success : true,
        name : name
    });
    namesUsed.push(name);
    return guestNumber + 1;
}

function joinRoom(socket, room){
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit('joinResult',{room: room});
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + 'has joined' + room + '.'
    });
    if(usersInRoom.length > 1){
    var usersInRoomSummary = 'Users currently in ' + room + ';';
    for(var index in usersInRoom){
        var userSocketId = usersInRoom[index].id;
        if(userSocketId != socket.id){
            if(index > 0){
                usersInRoomSummary += ',';
            }
            usersInRoomSummary += nickNames[userSocketId];
        }
    }
    usersInRoomSummary += '.';
    socket.emit('message',{text:usersInRoomSummary});
    }
}
