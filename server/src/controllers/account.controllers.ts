import express, { Request, Response } from 'express';
import * as nodemailer from "../services/nodemailer"
import * as utils from "../utils/common.utils"
import * as response from "../config/response"
import * as models from "../models/account.models"
import * as dataAccess from "../utils/dataAccess.utils"
import jwt, {JwtPayload} from "jsonwebtoken"

// sign-up 
export const sendEmail = async (req:Request, res: Response) => {
    const {email} = req.body
    const authCode:string = utils.generateRandomCode(5)    
    try {
        await models.authCodeInsert(dataAccess, authCode)
        await nodemailer.sendEmail(email, authCode)    
        res.json(response.emailSendSuccess)
    } catch (error) {
        res.json(response.emailFailedSend)
    }
}

export const signUp = async (req: Request, res: Response) => {
    const {email, password, authCode} = req.body
    const affiliateCode: any|undefined = req.headers["gf-affiliate-code"];
    
    const nick:string = `user${utils.generateRandomNumber(10)}`
    await models.signUpInsert(dataAccess, affiliateCode, email, utils.hashWithSHA256(password), nick)
    await models.authCodeUpdate(dataAccess, authCode)
    
    res.json(response.signUpSuccess)
}

// sign-in
export const signIn = async ( req: Request, res: Response ) => {
    const {email, password} = req.body

    const data = await models.userCheck(dataAccess, email, utils.hashWithSHA256(password))
    if(data) {
        const accessToken = jwt.sign(data, String(process.env.ACCESS_SECRET), {expiresIn: "1m", issuer: data.email})
        const refreshToken = jwt.sign(data, String(process.env.REFRESH_SECRET), {expiresIn: "24h", issuer: data.email})
        res.cookie('accessToken', accessToken, {
            secure: false,
            httpOnly: true
        })
        res.cookie('refreshToken', refreshToken, {
            secure: false,
            httpOnly: true
        })

        res.json(response.signInSuccess)
    } else {
        res.json(response.memberValidationError)
    }
}

export const accessToken = async ( req: Request, res: Response ) => {
    try {
        const token: any = req.cookies.accessToken;
        const data = jwt.verify(token, String(process.env.ACCESS_SECRET)) as JwtPayload;

        const userData: any = await models.userCheck(dataAccess, data.email, data.password)
        
        if(userData) {
            const {password, is_delete, ...others} = userData
            res.json(others)
        } else{
            res.json(response.memberValidationError)
        }
    } catch (error) {
        res.json(error)
    }
}

export const refreshToken = async (req: Request, res: Response ) => {
    try {
        const token: any = req.cookies.refreshToken;
        const data = jwt.verify(token, String(process.env.REFRESH_SECRET)) as JwtPayload;            
        const userData: any = await models.userCheck(dataAccess, data.email, data.password)

        if(userData) {
            const accessToken = jwt.sign(userData, String(process.env.ACCESS_SECRET), {expiresIn: "1m", noTimestamp: true })
            res.cookie('accessToken', accessToken, {
                secure: false,
                httpOnly: true
            })
            res.json(response.accessTokenRecreate)
        } else{
            res.json(response.memberValidationError)
        }
    } catch (error) {
        res.json(error)
    }
}

export const signInSuccess = ( req: Request, res: Response ) => {

}

export const signout = ( req: Request, res: Response) => {
    try {
        res.cookie("accessToken", "");
        res.json(response.signOutSuccess)
    } catch (error) {
        res.json(error)
    }
}