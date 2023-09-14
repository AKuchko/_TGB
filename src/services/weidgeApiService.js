const { create } = require('axios')

class WidgetApi {
    #instance

    constructor(base_url) {
        this.#instance = create({
            baseURL: base_url 
        })
    }

    postMessage({ message }) {
        return this.#instance.post('/chat/tg_message', { message })
    }
}

module.exports = { WidgetApi }