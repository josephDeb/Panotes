import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "notes"
})

con.connect((error) => {
    if (error) {
        console.log("NOT CONNECTED TO DATABASE")
    } else {
        console.log("CONNECTED")
    }
})

export default con