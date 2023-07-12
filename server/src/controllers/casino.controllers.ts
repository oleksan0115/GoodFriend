import { Request, Response, NextFunction } from 'express';
import { getMyInfo } from '../services/casino.services';
import { MyInfo } from '../types/casino.types';
import { Member } from "../types/table.types";
import * as dataAccess from '../utils/dataAccess.utils'
import * as response from "../config/response"
import * as models from "../models/casino.models"

export const responseBalance = async (req: Request, res: Response) => {
    const {username} = req.query;

    const myInfo: MyInfo = await getMyInfo()
    const member: Member = await dataAccess.findOne(
        "gf_member", 
        "*",  
        {column: "nick", condition: "=", data: username })
    
    if(myInfo.balance >= member.game_money) {
        res.status(200).json({balance: member.game_money})
    } else {
        // Write notification code.
        res.status(400).json(response.insufficientBalanceFailed)
    }
}

export const changeBalance = async (req: Request, res: Response) => {
    const {username, amount, transaction } = req.body
    const member: Member = await dataAccess.findOne(
        "gf_member",
        "*",
        { column: "nick", condition: "=", data: username })
        
    await models.casinoHistoryInsert(dataAccess, member.affiliate_code, member.member_idx, member.nick, transaction.id, transaction.type, transaction.referer_id, transaction.amount, transaction.details.game.id, transaction.details.game.title, transaction.details.game.type, transaction.details.game.vendor)
    await models.memberGameMoneyChange(dataAccess, member.member_idx, transaction.amount)

    res.status(200)
}