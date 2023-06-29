import * as dataAccess from "../utils/dataAccess.utils"
import * as common from "../utils/common.utils"

class EmailVerification {
    private email: string
    private authCode: string

    constructor(email: string) { 
        this.email = email
        this.authCode = common.generateRandomCode(5)
    }

    async emailCheck(): Promise<boolean>  {
        const sql = `
            SELECT email FROM gf_member rm
                rm.email = ?`
        const values = [this.email]
        const data: string[] = await dataAccess.selectOne(sql, values)

        if(data.length === 0) return true
        if(data.length === 1) return false
        return false
    }

    sendEmail(): void {
        const sql = `
            INSERT INTO gf_email_code
                SET code = ?,
                    reg_date = NOW()`
        const values = [this.authCode]
        
        dataAccess.insert(sql, values)
    } 
}

class SignUp {
    private email: string
    private password: string
    private promotionCode: string
    

    constructor(email:string, password:string, promotionCode: string) {
        this.email = email,
        this.password = password,
        this.promotionCode = promotionCode
    }

    async promotionCodeCheck(): Promise<boolean> {
        const sql = `
            SELECT promotion_code FROM gf_admin
                WHERE promotion_code = ?`
        const values = [this.promotionCode]
        const data: string[] = await dataAccess.selectOne(sql, values)
        
        if(data.length === 1) return true
        if(data.length === 0) return false
        return false
    }


    async memberInsert() : Promise<void> {
    }

    async promotionInsert(): Promise<void> {
        
        
    }


}


export {EmailVerification}