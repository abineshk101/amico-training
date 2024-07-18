const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
        
    })
}

add(1,1).then((d1)=>{
    console.log(d1)
    return add(d1,1)
}).then((d2)=>{
    console.log(d2)
}).catch((e)=>{
    console.log(e)
}) 