var fs = require('fs');

console.log("checking for directory");
var mainFolder = "./mainFolder"

if(fs.existsSync(mainFolder)){
    console.log("folder exists");
}
else{
    console.log("the folder is not there");
    fs.mkdirSync(mainFolder);
}

console.log("Getting files in main Folder");
fs.readdir(mainFolder,function(err,files){
    var currentLetterCount = {

    };
    
    
    console.log("loop all files in main folder and count letters");
    files.forEach(file=>{
        console.log("current file name ->",file);
        var fileContent = fs.readFileSync(mainFolder + "/" + file).toString();
        //console.log("file:" ,fileContent,"Has this manycharacters: ", fileContent.length);
        currentLetterCount[file] = fileContent.length;
    })

    console.log("current letter count:",currentLetterCount);

    var logFile = "./log.json";
    console.log("checking for log file, if none will create");
    if( ! fs.existsSync(logFile)){
        console.log("the log file didn't exist, creating");
        fs.writeFileSync(logFile,JSON.stringify({}))
    }

    var logFileObject = fs.readFileSync(logFile).toString();
    logFileObject = JSON.parse(logFileObject); 
    console.log("logFileObjesc before getting modified", logFileObject);
    for(var key in currentLetterCount){
        console.log("key:", key, "value:",currentLetterCount[key]);
        var arrayObject = {
            timestamp:Date.now(),
            count:currentLetterCount[key]
        }
        var logFileNameArray = logFileObject[key];
        if(!logFileNameArray){
            logFileNameArray = [];
        }
        logFileNameArray.push(arrayObject);
        console.log("logFileNameArray",logFileNameArray);
        logFileObject[key] = logFileNameArray;
    }

    fs.writeFileSync(logFile,JSON.stringify(logFileObject));
})