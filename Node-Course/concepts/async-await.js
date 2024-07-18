const add=(a,b)=>{
    // return new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve(a+b)
    //     }, 2000);  
    // })
    if(a<0 || b<0){
        throw Error ("valis")
    }
    return a+b
}

const doWork=async ()=>{
    const sum=await add(1,1)
    const sum1=await add(sum,1)
    return sum1
}

doWork().then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e)
})

