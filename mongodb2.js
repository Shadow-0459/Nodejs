var MongoClient = require('mongodb').MongoClient,
        Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost',27017,{
    socketOptions:{ connectTimeoutMS:500 },
    poolSize:5,
    auto_reconnect:true
    },{
        numberOfRetries:3,
        retryMilliSeconds:500
    }));
client.open(function(err,client){
    if(err){
        console.log("connect Failed");
    }else{
        var db = client.db("testDB");
        if (db) {
            console.log("connect Via client object");
            db.authenticate("dbadmin","test",function(err,results){
                if (err) {
                    console.log("Authentication failed...");
                    client.close();
                    console.log("connection closed");
                }else {
                    console.log("Authentication Via Object..");
                    db.logout(function(err,result){
                        if (err) {
                            console.log("logout out Via Client Object...");
                        }
                        client.close();
                        console.log("connection closed");
                    });
                }
            });
        }
    }
});
