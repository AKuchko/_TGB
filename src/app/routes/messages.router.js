const { Router } = require('express')

const { WidgetApi } = require('../../services/weidgeApiService.js')

const msgRouter = new Router()
const widgetApi = new WidgetApi('https://amo-inn-api.services.mobilon.ru')

msgRouter.post('/new_msg', async (req, res) => {
    const { message } = req.body
    console.log('post /messages/new_msg');
    console.log('message: ', message);

    try {
        const result = widgetApi.postMessage({ message })
        res.status(201).json({ result })
    } catch (error) {
        console.error(error);
        res.status(400)
    }
})

module.exports = msgRouter