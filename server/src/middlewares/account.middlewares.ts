import { Request, Response, NextFunction } from 'express';
import { EmailVerification } from '../models/account.models';
import { emailDuplicateError } from '../config/error.config';


const emailCheck = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    const {email} = req.body
    const emailVerification = new EmailVerification(email)    

    const duplicate = await emailVerification.emailCheck()

    if(duplicate === true) { 
        next()    
    } else {
        res.json(emailDuplicateError)
    }
}


export {emailCheck}