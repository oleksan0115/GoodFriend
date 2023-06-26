import express from "express"
const app = express();
import { handler } from "./build/handler.js";

app.use(express.static('public'));

app.use((req, res, next) => {
  const host = req.get('host');
  if (host === '172.104.111.61:10002') {
    res.redirect('https://demo.goodfriendsgaming.com');
  } else {
    next();
  }
});

app.use(handler);

const port = 10002;
app.listen(port, () => { 
   console.log(`server is on running on port ${port}`);
})
