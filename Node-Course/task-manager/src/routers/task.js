const express = require('express')
const Tasks = require('../models/tasks')
const router = express.Router()
const auth = require('../midleware/auth')

router.post('/tasks', auth, async (req, res) => {
    const tasks = new Tasks({
        ...req.body,
        owner: req.user._id
    })

    try {
        await tasks.save()
        res.status(201).send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        })
        res.status(200).send(req.user.tasks)
    } catch (e) {
        res.status(404).send()
    }

})

router.get('/tasks/:id', auth, async (req, res) => {
    _id = req.params.id

    try {
        const task = await Tasks.find({ _id, owner: req.user._id })
        if (task.length == 0) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }

})

router.patch('/tasks/:id', auth, async (req, res) => {

    const keysGot = Object.keys(req.body)
    const allowdkeys = ['description', 'completed']
    const isAllowd = keysGot.every((update) => allowdkeys.includes(update))

    if (!isAllowd) {
        return res.status(404).send({ error: "Invalid Updates !" })
    }
    try {
        const task = await Tasks.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            return res.status(404).send()
        }
        keysGot.forEach((toUpdate) => {
            task[toUpdate] = req.body[toUpdate]
        })
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const deleted = await Tasks.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!deleted) {
            return res.status(404).send()
        }
        res.send(deleted)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router