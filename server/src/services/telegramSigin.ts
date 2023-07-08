import * as express from 'express';
import { TelegramBot } from 'node-telegram-bot-api';

const app: express.Application = express();
const token: string = '{your_api_token}';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});