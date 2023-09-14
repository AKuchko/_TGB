const express = require('express')

const createApp = ({ bot }) => {
    const app = express()
    
    app.use(express.json());
    app.use(require('./routes'))

    return app
}

module.exports = { createApp }