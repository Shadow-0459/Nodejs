var express = require('express');
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());
app.get('/',function(req,res){
    console.log("cookie:" , req.cookie);
});
app.listen(8181);
