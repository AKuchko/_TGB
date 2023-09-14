const { createBot } = require('./src/bot')
const { createApp } = require('./src/app')

    ; (async () => {
        const bot = await createBot('5974356794:AAE3_eC6qwPnwwWpuoofkiZxiheMe-Jxaz8')
        const app = createApp({ bot })

        bot.launch()
        app.listen(3000, () => {
            console.log('app start')
        })

        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
    })()