var MongoClient = require('mongodb').MongoClient;
MongoClient.connect = ('mongodb://dbadmin:test@localhost:27017/testDB',{
    db:{w :1,native_parser:false},
    server:{
        poolSize:5,
        socketOptions:{connectTimeoutMs:500},
        auto_reconnect:true
    },
    replset:{},
    mongos:{}
},function(err,db){
    if(err){
        console.log("connection Faild");
    }
    else {
        console.log('connection via');

        db.logout(function(err,result){
            if(!err){
                console.log("log out");
            }
            db.close();
            console.log("connection closed");
        });
    }
});
