const express = require("express");
const cors = require("cors");
const { exit } = require("process");
const { Telegraf } = require("telegraf");
var { mailSend } = require("./mail");
const bot = new Telegraf("5398137975:AAEaagssekN6GFPgJSMXf-tLJybYRUC1kXw");
const app = express();
app.use(cors());
app.listen(8080, async () => {
  console.log(`Server is running at http://localhost:8080`);
  // mailSend();
  console.log("Telegram bot started.");
  // bot.command("start", (ctx) => {
  // console.log(ctx.from);
  // console.log("ctx.chat.id: ", ctx.chat.id);
  // bot.telegram.sendMessage(
  //   // ctx.chat.id,
  //   "-534475872",
  //   // "loveFeynman0226",
  //   "@loveFeynman0226 Welcome to my new telegram bot."
  //   // {}
  // );
  // });
  const chatID = bot.telegram.getChat("@loveFeynman0226")
  console.log('chatId: ',chatID);
  bot.launch();
});
