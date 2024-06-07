const express = require('express')
const app = express()

const customMiddleware= (req,res,next)=>{
    console.log("This is a custom middleware")
    next()
}
const ErrorHandle =(err,req,res,next)=>{
    if(err){
        console.log(err)
    }
    next()
}
app.use(customMiddleware)
app.use(ErrorHandle)

app.get('/',(req,res)=>{
    throw new Error("THis is a custom error")
    res.send("Hello World")
})
app.listen(3000,()=>console.log("running"))