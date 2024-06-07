Event Module
 
 * Allows to work with events in node.
 * Events are actions that happened in our app that we can respond to
 * Using event module we can make custom events

            const eventEmitter = require('events')
            const myEmitter= new eventEmitter()

            myEmitter.on("orderPizza",()=>{
                console.log("Order Recieved");
            })

            myEmitter.emit("orderPizza")