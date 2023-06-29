import mysql from 'mysql2';

const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB
});

db.connect((err: any) => {
    if (err) throw err;
    console.log("connected");
});

export default db;