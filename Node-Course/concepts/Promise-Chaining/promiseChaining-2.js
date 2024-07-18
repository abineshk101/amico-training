require('../../task-manager/src/db/mongoose')
const User=require('../../task-manager/src/models/user')

// User.findByIdAndUpdate('6666877b21fec5d60ef06fdb',{age:1}).then((d)=>{
//     console.log(d)
//     return User.countDocuments({age:1})
// }).then((d2)=>{
//     console.log(d2)
// }).catch((e)=>{
//     console.log(e)
// })

const update =async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age:2})
    return count
}

update("6666877b21fec5d60ef06fdb",-2).then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e)
})