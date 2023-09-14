const { create } = require('axios')

class BotService {
    #instance

    constructor() {
        this.#instance = create({ baseURL: 'http://localhost:3000'})
    }

    newMessage(message) {
        this.#instance.post('/messages/new_msg', { message })
    }
}

module.exports = { BotService }