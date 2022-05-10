const Telegraf = require("telegraf");

const bot = new Telegraf("5398137975:AAEaagssekN6GFPgJSMXf-tLJybYRUC1kXw");

bot.start((ctx) => ctx.reply("Welcome to the new crypto world!"));
bot.hears("hi", (ctx) => ctx.reply("bit4you.io is awesome"));
bot.startPolling();

console.log("Telegram bot started.");
