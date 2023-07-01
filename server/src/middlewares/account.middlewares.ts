import { Request, Response, NextFunction } from 'express';
import * as response from '../config/response';
import * as models from '../models/account.models'
import * as dataAccess from "../utils/dataAccess.utils"

export const emailCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {email} = req.body
    const check:boolean = await models.emailCheck(dataAccess, email)
    
    if(check) {
        next()
    } else {
        res.json(response.emailDuplicateError)
    }
}


export const authCodeCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {authCode} = req.body
    const check:boolean = await models.authCodeCheck(dataAccess, authCode)
    
    if(check) {
        next()
    } else {
        res.json(response.authCodeValidationError)
    }
}

export const promoCodeCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {promoCode} = req.body
    const check:boolean = await models.promoCodeCheck(dataAccess, promoCode)

    if(check) {
        next()
    } else {
        res.json(response.promoCodeValidationError)
    }
}