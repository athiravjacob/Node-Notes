const http = require('http')
http.createServer((req,res)=>{
    res.end("Hello World")
}).listen(3000,'127.0.0.1',()=>console.log("server Running"))