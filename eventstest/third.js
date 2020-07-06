var events = require('events');

var eventEmitter = new events.EventEmitter();
eventEmitter.on('callBatman', function lightTheBatSignal(){
    console.log("Light Bat Signal!");
})
eventEmitter.on('callPolice', function callPolice(){
    console.log("Police Notified");
})

eventEmitter.on('plantABomb',function plantABomb(terrorist){
    console.log("Bomb Planted!"+terrorist);
    if(terrorist=="joker"){
        eventEmitter.emit('callBatman');
    }
    else{
        eventEmitter.emit('callPolice');
    }
})

eventEmitter.emit('plantABomb', 'joker');
console.log("Program Has Ended.");