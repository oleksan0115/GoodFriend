import db from "../config/database.config"
import { QueryResult, CheckObject } from "../types/database.types"

const selectOne = (sql:string, values: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {       
        db.query(sql, values, (err: any, rows: any) => {
            if(err) { 
                reject(err)
                console.log(err)
            } else {
                resolve(rows[0])
            }
        })
    })
}

const selectAll = (sql:string, values: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {       
        db.query(sql, values, (err: any, rows: any) => {
            if(err) { 
                reject(err)
                console.log(err)
            } else {
                resolve(rows)
            }
        })
    })
}

const insert = (sql: string, values: any[]): Promise<QueryResult> => {
    return new Promise<QueryResult>((resolve, reject) => {
        db.query(sql, values, (err: any) => {
            if (err) {
                reject({ error: err });
                console.log(err);
            } else {
                resolve({
                    type: "INSERT",
                    message: "Complete"
                });
            }
        });
    });
}

const update = (sql: string, values: any[]): Promise<QueryResult> => {
    return new Promise<QueryResult>((resolve, reject) => {
        db.query(sql, values, (err: any) => {
            if (err) {
                reject({ error: err });
                console.log(err);
            } else {
                resolve({
                    type: "UPDATE",
                    message: "Complete"
                });
            }
        });
    });
}

const remove = (sql: string, values: any[]): Promise<QueryResult> => {
    return new Promise<QueryResult>((resolve, reject) => {
        db.query(sql, values, (err: any) => {
            if (err) {
                reject({ error: err });
                console.log(err);
            } else {
                resolve({
                    type: "UPDATE",
                    message: "Complete"
                });
            }
        });
    });
}

const sql: string = `
    SELECT email FROM gf_member WHERER gf_member.idx = ? `

const check = async (dataAccess: any, table:string, select: string, ...where: CheckObject[]) => {
    let sql: string = `SELECT ${select} FROM ${table} WHERE `
    let values: any[] = []

    where.forEach((v, i, arr) => {
        if(i+1 === arr.length) {
            sql += `${v.column} ${v.condition} `
            sql += `? `
        } 

        else {
            sql += `${v.column} ${v.condition} `
            sql += `? `
            sql += `AND `
        }

        values.push(v.data)
    })
    
    const data:any = await dataAccess.selectOne(sql, values)

    if(data) {
        return true
    } else {
        return false
    }
}

export {selectOne, selectAll, insert, update, remove, check}