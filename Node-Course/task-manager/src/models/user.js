const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Tasks = require('../models/tasks')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Enter a valid age')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            if (validator.contains(value.toLowerCase(), "password")) {
                throw new Error('The name password cannot be set as password')
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ],

    avatar:{
        type:Buffer
    }

}, { timestamps: true })

userSchema.virtual('tasks', {
    ref: 'Tasks',
    foreignField: 'owner',
    localField: '_id'

})

userSchema.methods.generateToken = async function () {
    const user = this
    const token = jwt.sign({ '_id': user._id.toString().replace('Barear', '') }, 'amico')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.statics.FindByCredential = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw Error("Unable to login")
    }

    /////// check the original password match with the bcrypt password

    const userPass = await bcrypt.compare(password, user.password)
    if (!userPass) {
        throw Error("Unable to login")
    }
    return user
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.pre('deleteOne', { document: true }, async function (next) {
    const user = this;
    await Tasks.deleteMany({ owner: user._id })
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User