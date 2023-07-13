// change balance
export const casinoHistoryInsert = async (dataAccess: any, affiliateCode: string, memberIdx: number, nick: string, transactionId: number, transactionType: string, refererId: number, amount: number, gameId: number, gameTitle: string, round: string, gameType: string, gameVendor: string)  => {
    
    const sql: string = `
        INSERT INTO gf_casino_history
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
                vendor = ?`
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