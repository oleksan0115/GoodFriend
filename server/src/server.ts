import dotenv from 'dotenv';
import path from "path"

if(process.env.NODE_ENV === "production") {
    console.log("start production mode")
    dotenv.config({ path: path.resolve(__dirname, '../.env.development')});
} else {
    console.log("start development mode")
    dotenv.config({ path: path.resolve(__dirname, '../.env.development')});
}

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app: Application = express()
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:10010", "https://demo.goodfriendsgaming.com"],
    methods: ["GET", "POST"],
    credentials: true 
}));


import * as middlewares from './middlewares/validation.middlewares';
app.use("/api/*", middlewares.checkHeaders);

// account
import accountRouter from "./routes/account.routes";
app.use("/api/account", accountRouter);

const port:number = 9001

app.listen(port, () => {

    console.log(`env ${process.env.DB_USER}`)
    console.log(`App is listening on port ${port}`);
});