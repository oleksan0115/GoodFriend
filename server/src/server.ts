import dotenv from 'dotenv';

if(process.env.NODE_ENV === "production") {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
}

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app: Application = express()
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:10010", "https://server.goodfriendsgaming.com"],
    methods: ["GET", "POST"],
    credentials: true 
}));


import * as middlewares from './middlewares/validation.middlewares';
app.use("/api/*", middlewares.checkHeaders);

// account
import accountRouter from "./routes/account.routes";
app.use("/api/account", accountRouter);

app.listen(10001, () => {
    console.log(`App is listening on port 10001`);
});