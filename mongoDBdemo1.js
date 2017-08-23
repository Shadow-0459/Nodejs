var mongodb = require('mongodb');
var server = new mongodb.Server("localhost",27017,{safe:true});
new mongodb.Db('test',server,{safe:true}).open(function(error,client){
    if(error) throw error;
    var collectionaa = new mongodb.Collection(client,'user');
    collectionaa.find(function(error,cursor){
        cursor.each(function(error,doc){
            if(doc){
                console.log("name:"+doc.name+" age:"+doc.age);
            }
        });
    });
});
