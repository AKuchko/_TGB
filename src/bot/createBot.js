const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const { BotService } = require('../services/botService')

const createBot = async (token) => {
    const bot = new Telegraf(token)
    const botService = new BotService()

    bot.start(ctx => {
        console.log('command /start');
        console.log(ctx);
        ctx.reply('Hello 🙂')
    })

    bot.on(message('text'), async ctx => {
        console.log('new text message');
        console.log('ctx: ', ctx);
        const { message } = ctx.update
        botService.newMessage(ctx.update.message)
        ctx.reply('text message detected')
    })

    return bot
}

module.exports = { createBot }