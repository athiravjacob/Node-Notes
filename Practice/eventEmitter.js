const eventEmitter = require('events')
const myEmitter= new eventEmitter()

myEmitter.on("orderPizza",()=>{
    console.log("Order Recieved");
})

myEmitter.emit("orderPizza")