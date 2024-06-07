const eventEmitter = require("events");
const os = require("os");
const myEmitter = new eventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello ,${name}`);
});

myEmitter.emit("greet", "Athira");
console.log(os.cpus().length);
 