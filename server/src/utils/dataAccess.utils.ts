import db from "../config/database.config"
import { QueryResult } from "../types/database.types"

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

export {selectOne, selectAll, insert, update, remove}