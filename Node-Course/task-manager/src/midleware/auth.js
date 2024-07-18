const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decode = jwt.verify(token, 'amico')
        const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

        if (!user) {
            throw Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send(e)
    }

}

module.exports = auth