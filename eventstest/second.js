var events = require('events');

var eventEmitter = new events.eventEmitter();
eventEmitter.emit('plantABomb',function plantABomb(){
    console.log("Bomb Planted!");
    
})

eventEmitter.emit('plantABomb');
console.log("Program Has Ended.");