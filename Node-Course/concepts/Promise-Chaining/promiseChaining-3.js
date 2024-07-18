require('../../task-manager/src/db/mongoose')
const Tasks=require('../../task-manager/src/models/tasks')

// Tasks.deleteOne({_id:"6666bf757cd0c57a4d83d762"}).then((d)=>{
//     console.log(d)
//     return Tasks.countDocuments({completed:true})
// }).then((d1)=>{
//     console.log(d1)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount=async(id)=>{
    const deletedItem=await Tasks.findByIdAndDelete(id)
    const countOfTasks=await Tasks.countDocuments({completed:false})
    return countOfTasks
}

deleteTaskAndCount("6666bb21503650183d1e7cb6").then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e)
})