const doWorkPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Successfully got the data")
        reject("Error occured message")
    })
})

doWorkPromise.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})