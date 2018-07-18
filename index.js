const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

const { loggingMiddleware, button } = Alice

alice.use(loggingMiddleware({
    level: 1 // Optional. DEFAULT 0. see https://github.com/pimterry/loglevel
}))

alice.welcome(async (ctx) => {
    ctx.reply('Привет! Что хочешь?')
})

alice.command('курит калик?', async (ctx) => {
    ctx.reply('давид')
})


alice.command('купить слона', async (ctx) => {
    const buyBtn = ctx.buttonBuilder
        .text('Купить слона')
        .url('example.com/buy')
        .payload({buy: "slon"})
        .shouldHide(true)
        .get()

    const replyMessage = ctx.replyBuilder
        .text('Вы что, серьёзно?')
        .tts('Вы что, серьё+зно?')
        .addButton(buyBtn)
        .get()
    return ctx.reply(replyMessage)
})
// alice.command(/(https?:\/\/[^\s]+)/g, ctx => ctx.reply('Matched a link!'))

alice.any(async (ctx) => {
    // console.log(ctx.message);
    ctx.reply(ctx.message)
})

alice.listen('/', 3000, callback => console.log('privetik'))