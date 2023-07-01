import express, { Request, Response } from 'express';
import * as nodemailer from "../services/nodemailer"
import * as utils from "../utils/common.utils"
import * as response from "../config/response"
import * as models from "../models/account.models"
import * as dataAccess from "../utils/dataAccess.utils"


export const sendEmail = async (req:Request, res: Response) => {
    const {email} = req.body
    const authCode:string = utils.generateRandomCode(5)    
    try {
        await models.authCodeInsert(dataAccess, authCode)
        await nodemailer.sendEmail(email, authCode)    
        res.json(response.emailSendComplete)
    } catch (error) {
        res.json(response.emailFailedSend)
    }
}

export const signUp = async (req: Request, res: Response): Promise<any> => {
    const {email, password, authCode} = req.body
    const affiliateCode: any|undefined = req.headers["gf-affiliate-code"];
    
    const nick:string = `user${utils.generateRandomNumber(10)}`
    await models.signUpInsert(dataAccess, affiliateCode, email, utils.hashWithSHA256(password), nick)
    await models.authCodeUpdate(dataAccess, authCode)
    
    res.json(response.signUpComplete)
}
