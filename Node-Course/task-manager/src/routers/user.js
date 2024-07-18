const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../midleware/auth')


router.post("/users", async (req, res) => {

    const user = new User(req.body)

    try {
        await user.save()
        const token = user.generateToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/users', auth, (req, res) => {

    res.send(req.user)

})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.FindByCredential(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.send({ user, "token": token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout', auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter((object) => {
            return object.token != req.token
        })
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }

})

router.post('/users/logoutall', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ tokens: req.user.tokens })
    } catch (e) {
        res.send(e)
    }
})

router.patch('/users/me', auth, async (req, res) => {

    const updates = Object.keys(req.body)

    const allowUpdates = ['name', 'age', 'email', 'password']
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" })
    }

    try {
        updates.forEach((userKey) => {
            req.user[userKey] = req.body[userKey]
        })
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        const user = new User({ _id: req.user._id });
        await user.deleteOne()
        res.send(req.user)

    } catch (e) {
        res.status(404).send(e)
    }
})

const upload=multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)/)){
            cb(new Error("Enter correct file"))
        }
        cb(undefined,true)
    }
})

router.post('/users/me/avatar',auth, upload.single('avatar'), async(req, res) => {
    const buffer= await sharp(req.file.buffer).resize({height:250,width250}).toBuffer
    req.user.avatar=buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })

})

router.delete('/users/me/avatar',auth,async(req,res)=>{
    req.user.avatar=undefined
    await req.user.save()
    res.send()
})

router.get('/users/:id/avatar',async(req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw Error("You haven't upload the avatar yet")
        }
        res.set('Content-Type','image/jpg')
        res.send(user.avatar)
    }catch(e){
        res.status(400).send()
    }
    
})
module.exports = router