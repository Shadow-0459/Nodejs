var util = require("util");
function Base(){
    this.name = 'ZHou';
    this.base = 1991;
    this.sayhello = function(){
        console.log('hello' + this.name);
    }
}


    Base.prototype.showname = function(){
        console.log(this.name);
    }
    function sub(){
        this.name = 'sub';
    }
    util.inherits(sub,Base);

    var objBase = new Base();
    objBase.showname();
    objBase.sayhello();
    console.log(objBase);
    var objsub = new sub();
    objsub.showname();
    console.log(objsub);
