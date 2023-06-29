import express, { Request, Response } from 'express';
import {EMAIL_VERIFICATION_TIME} from "../config/setting.config"
import { EmailVerification } from '../models/account.models';

const sendEmail = (req:Request, res: Response) => {
    const {email, password, promotion_code} = req.body
    const emailVerification = new EmailVerification(email)

    
}


export {}