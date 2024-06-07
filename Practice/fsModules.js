const fs = require('fs')
// fs.readFile('answers.md','utf-8',(err,data)=>{
//     if(data){
//         fs.writeFile('example.txt',data,'utf-8',(err)=>{
//             if(err) console.log(err)
//         })
//     }
// })

// fs.unlink('example.txt',(err)=>{
//     if(err) console.log(err)
//     else console.log("file deleted")
// })
let n=1

while(n<=10){
    
    fs.appendFile("newE.txt",n.toString(),'utf-8',(err)=>{
        if(err){
            console.log("oops")
        }
        else console.log("success");
    })
    n=n+2
}
