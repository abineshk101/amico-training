const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

const multer = require('multer')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|doc|docs)/)){
            cb(new Error('Please upload a jpg file'))
        }
        cb(undefined,true)
    }
})

app.post('/upload/me',upload.single('upload'),(req,res)=>{
    res.status(200).send()
})
// const Tasks=require('./models/tasks')
// const User=require('./models/user')
// const main=async()=>{
//     const task = await Tasks.findById('6671302a125ef9b4bbd98df4').populate('owner')
//     console.log(task)
//     const user= await User.findOne({_id:'6671521f6474d4c0bf90be43'}).populate('tasks')
//     console.log(user.tasks)
// }
// main()