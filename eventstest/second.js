var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('callPolice', function callPolice(){
    console.log("Police Notified");
})

eventEmitter.on('plantABomb',function plantABomb(){
    console.log("Bomb Planted!");
    eventEmitter.emit('callPolice');
})

eventEmitter.emit('plantABomb');
console.log("Program Has Ended.");