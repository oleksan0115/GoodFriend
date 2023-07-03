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
        const refreshToken = jwt.sign(data, String(process.env.REFRESH_SECRET), {expiresIn: "1h", issuer: data.email})

        res.cookie('accessToken', accessToken, {
            secure: process.env.NODE_ENV === "production" ? true : false,
            httpOnly: process.env.NODE_ENV === "production" ? true : false,
            sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
        })
        res.cookie('refreshToken', refreshToken, {
            secure: process.env.NODE_ENV === "production" ? true : false,
            httpOnly: process.env.NODE_ENV === "production" ? true : false,
            sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
        })

        res.json(response.signInSuccess)
    } else {
        res.json(response.memberValidationError)
    }
}

export const refresh = async (req: Request, res: Response ) => {
    try {
        const token: any = req.cookies.refreshToken;
        const data = jwt.verify(token, String(process.env.REFRESH_SECRET)) as JwtPayload;             
        
        const userData: any = await models.userCheck(dataAccess, data.email, data.password)
        const accessToken = jwt.sign(userData, String(process.env.ACCESS_SECRET), {expiresIn: "1m", issuer: data.email})
        const refreshToken = jwt.sign(userData, String(process.env.REFRESH_SECRET), {expiresIn: "1h", issuer: data.email})
            
        res.cookie('accessToken', accessToken, {
            secure: process.env.NODE_ENV === "production" ? true : false,
            httpOnly: process.env.NODE_ENV === "production" ? true : false,
            sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
        })
        res.cookie('refreshToken', refreshToken, {
            secure: process.env.NODE_ENV === "production" ? true : false,
            httpOnly: process.env.NODE_ENV === "production" ? true : false,
            sameSite: process.env.NODE_ENV === "production" ? 'strict' : 'lax'
        })
        res.json(response.tokenRecreate)
        
    } catch (error) {
        res.json(response.tokenVerificationFailed)
    }
}

export const signInSuccess = async ( req: Request, res: Response ) => {
    try {
        const token: any = req.cookies.accessToken
        const data = jwt.verify(token, String(process.env.ACCESS_SECRET)) as JwtPayload
        const userData: any = await models.userCheck(dataAccess, data.email, data.password)
        const {password, is_delete, reg_date, login_date, ...others} = userData
        res.json(others)
        
    } catch (error) {
        res.json(response.tokenVerificationFailed)
    }
}

export const signOut = ( req: Request, res: Response) => {
    try {
        res.cookie("accessToken", "");
        res.json(response.signOutSuccess)
    } catch (error) {
        res.json(error)
    }
}