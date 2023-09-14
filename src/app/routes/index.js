const { Router } = require('express')

const router = new Router()

router.use('/messages', require('./messages.router.js'))

module.exports = router