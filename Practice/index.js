//callback hell 

// function selectItem(callback){
//     setTimeout(()=>{
//         console.log("items selected")
//         callback()
//     },1000)
// }
// function updatecart(callback){
//     setTimeout(()=>{
//         console.log("Cart Updated")
//         callback()
//     },1000)
// }
// function proceedToPay(callback){
//     setTimeout(()=>{
//         console.log("Proceed to payy")
//         callback()
//     },1000)
// }

// selectItem(()=>{
//     updatecart(()=>{
//         proceedToPay(()=>{
//             console.log("Suces")
//         })
//     })
// })

// Promise chaining

// function selectItems(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Item selected")
//             resolve()
//         },1000)
//     })
// }
// function updatCart(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Cart updated");
//             resolve()
//         },1000)
//     })
// }
// function proceedToPay(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Proceed to pay");
//             resolve()
//         },1000)
//     })
// }

// selectItems()
//     .then(updatCart)
//     .then(proceedToPay)
//     .catch((err)=>{
//         console.log(err)
//     })


//Async Await

async function selectItems(){
   await new Promise(setTimeout(()=>{
    console.log("Proceed to pay");
    resolve()
},1000)) 
}
async function perform(){
    try {
        await selectItems()
    } catch (error) {
        
    }
}

