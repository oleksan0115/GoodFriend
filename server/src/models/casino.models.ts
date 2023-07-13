// change balance
export const casinoHistoryInsert = async (dataAccess: any, affiliateCode: string, memberIdx: number, nick: string, transactionId: number, transactionType: string, refererId: number, amount: number, gameId: number, gameTitle: string, gameType: string, gameVendor: string)  => {
    console.log(
        affiliateCode, 
        memberIdx, 
        nick, 
        transactionId, 
        transactionType, 
        refererId, 
        amount, 
        gameId, 
        gameTitle,
        gameType, 
        gameVendor)
    
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
    const values: (string|number)[] = [affiliateCode, memberIdx, nick, transactionId, transactionType, refererId, amount, gameId, gameTitle, gameType, gameVendor]
    return dataAccess.insert(sql, values)
}

export const memberGameMoneyChange = async (dataAccess: any, memberIdx: number, amount: number) => {
    const sql: string = `
        UPDATE gf_member
            SET amount = amount + ?,
            WHERE member_idx = ?`
    const values: number[] = [memberIdx, amount]
    return dataAccess.update(sql, values)
}