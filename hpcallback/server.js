//this is a callback function test file
//harry potter killed voldemort by being a callback of his mother
var fs = require('fs');

var isMotherLilyPotter = function(name,callback){
    fs.readFile('./mother/'+name+'.txt',function(err,data){
        if(err){
            callback(err);
        }
        else{
            console.log("mother's name was->",data.toString());
            var motherName=data.toString();
            if(motherName=='Lily Potter'){
                callback(null,true);
            }
        }
    })
};

var canKillVoldemort = function(name,callback){
    isMotherLilyPotter(name,callback);
}

var name="Vold";

canKillVoldemort(name,function(err,canKill){
    if(err){
        console.error("error in finding canKillVoldemort",err);
    }
    else{
        console.log("canKillVoldemort?",canKill);
    }
})