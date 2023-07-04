import { Request, Response, NextFunction } from 'express';
import * as models from "../models/validation.models"
import * as response from "../config/response"
import * as dataAccess from "../utils/dataAccess.utils"

export const checkHeaders = async (req: Request, res: Response, next:NextFunction) : Promise<any> => {
    const apiKey: any|undefined = req.headers["gf-api-key"];
    const affiliateCode: any|undefined = req.headers["gf-affiliate-code"];

    const check = await models.checkHeaders(dataAccess, apiKey, affiliateCode)
    if(check) {
        next()    
    } else {
        res.status(400).json(response.headersValidationError)
    }
}