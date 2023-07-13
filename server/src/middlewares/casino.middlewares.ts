import { Request, Response, NextFunction } from 'express';
import * as dataAccess from '../utils/dataAccess.utils'
import * as response from "../config/response"

export const userCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {username} = req.query
    const check = await dataAccess.findOne(`gf_member`, `nick`, {column: "nick", condition: "=", data: username})
    
    if(check) {
        next()
    } else {
        res.status(400).json(response.noneUserFailed)
    }
}