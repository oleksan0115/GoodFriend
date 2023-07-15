import * as setting from "../config/setting.config"
import { BetHistory, BetHistoryResult } from "../types/casino.types"

// change balance (callback)
export const casinoHistoryInsert = async (dataAccess: any, affiliateCode: string, memberIdx: number, nick: string, transactionId: number, transactionType: string, refererId: number, amount: number, gameId: number, gameTitle: string, round: string, gameType: string, gameVendor: string)  => {
    
    const sql: string = `
        INSERT INTO gf_casino_betting
            SET affiliate_code = ?,
                member_idx = ?,
                nick = ?,
                transaction_id = ?,
                type = ?,
                referer_id= ?,
                amount = ?,
                game_id = ?,
                title = ?,
                round = ?,
                game_type = ?,
                vendor = ?,
                reg_date = NOW()`
    const values: (string|number)[] = [affiliateCode, memberIdx, nick, transactionId, transactionType, refererId, amount, gameId, gameTitle, round, gameType, gameVendor]
    return dataAccess.insert(sql, values)
}

export const memberGameMoneyChange = async (dataAccess: any, memberIdx: number, amount: number) => {
    const sql: string = `
        UPDATE gf_member
            SET game_money = game_money + ?
            WHERE member_idx = ?`
    const values: number[] = [amount, memberIdx]
    return dataAccess.update(sql, values)
}

// list
export const getList = async (dataAccess: any, page?: number, search?: string) => {
    let sql: string = `SELECT * FROM gf_casino_list`
    
    if(search && search.length >= 4) sql += `WHERE title LIKE "%${search}%"`
    
    if(page) sql += `LIMIT ${page*setting.GAME_LIST_LIMIT}, ${setting.GAME_LIST_LIMIT}`
    if(!page) sql += `LIMIT 0, ${setting.GAME_LIST_LIMIT}`
    
    return dataAccess.selectAll(sql, [])
}

export const getListTotalCount = async (dataAccess:any) => {
    let sql: string = `SELECT count(*) as count FROM gf_casino_list`
    
    return dataAccess.selectOne(sql, [])
}

// info
export const getInfo = (dataAccess: any, idx: number) => {
    let sql: string = `SELECT title, thumbnail, vendor, type FROM gf_casino_list WHERE idx = ?`
    let values: number[] = [idx]
    
    return dataAccess.selectOne(sql, values)
}

// bet-result
export const getBetHistory = async(dataAccess: any, affiliateCode: any|undefined): Promise<any> => {
    let sql: string = `SELECT round FROM gf_casino_betting WHERE affiliate_code = ? AND type = ? ORDER BY reg_date DESC LIMIT 0, 20`
    let values: string[] = [affiliateCode, "win"]

    return await dataAccess.selectAll(sql, values)
}

export const betHistoryResult = async(dataAccess: any, list: string[])=> {
    const array: BetHistoryResult[] = await Promise.all(
        list.map( async (v: any) => {
            const round: string = v.round;
            const bets: BetHistory[] = await dataAccess.findAll(
                "gf_casino_betting", 
                "title, nick, type, amount",
                {column: "round", condition: "=", data: round });
        
            let title: string = bets[0].title;
            let nick: string = bets[0].nick;
            let betAmount: number|undefined = bets.find(bet => bet.type === 'bet')?.amount;
            let profitAmount: number = bets.reduce((acc, bet) => acc + bet.amount, 0); 
        
            let betHistoryResult: BetHistoryResult = {
                "title": title,
                "nick": nick,
                "betAmount": betAmount,
                "profitAmount": profitAmount
            }
        
            return betHistoryResult;
        }
    ));
    return array;
}