import * as types from "../types/check.types"
import * as dataAccess from "../utils/dataAccess.utils"

export const checkHeaders = async (dataAccess:any, apiKey:string, affiliateCode:string): Promise<boolean> => {
    const sql: string = `SELECT api_key, affiliate_code FROM gf_affiliate WHERE api_key = ? AND affiliate_code = ?`
    const values: string[] = [apiKey, affiliateCode]

    const check: types.EmailCheckResult = await dataAccess.selectOne(sql, values)
    
    if(check) {
        return true
       } else {
        return false
    }
}