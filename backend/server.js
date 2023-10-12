import express from "express";
import mysql from "mysql"
import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: 'todolist'
})


app.get("/", (req, res) => {
    res.send("hello NODE APi")
})


app.get("/todos", (req,res)=>{
    const sql = "SELECT * FROM todo";
    con.query(sql, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/todos", (req,res)=>{
    const sql = "INSERT INTO todo (`title`, `description`, `date`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.date
    ]
    con.query(sql, [values], (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put('/edit/:id', (req, res)=>{
    const sql = "update todo set `title` = ?, `description` = ?,  `date` = ? where id = ?"
    const values = [
        req.body.title,
        req.body.description,
        req.body.date
    ]
    const id = req.params.id;

    con.query(sql, [...values,id], (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.delete("/todos/:id", (req, res) => {
    const sql = "DELETE FROM todo WHERE id = ?";
    const id = req.params.id;
    con.query(sql,[id], (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(8081, () => {
    console.log("RUNNING")
})