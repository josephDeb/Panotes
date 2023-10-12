import express from "express";
import mysql from "mysql"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: 'products'
})
app.get("/",   (req,res)=>{
    return res.json("FROM BACEKND")
})

app.get("/users", (req,res)=>{
    const sql = "SELECT * FROM items";
    con.query(sql, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/users', (req, res)=>{
    const sql = "INSERT INTO items (`item_name`, `stocks`, `price`, `image`) VALUES (?)";
    const values = [
        req.body.item_name,
        req.body.stocks,
        req.body.price,
        req.body.image
    ]
    con.query(sql, [values], (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.put('/edit/:id', (req, res)=>{
    const sql = "update items set `item_name` = ?, `stocks` = ?, `price` = ?, `image` = ? where id = ?"
    const values = [
        req.body.item_name,
        req.body.stocks,
        req.body.price,
        req.body.image
    ]
    const id = req.params.id;

    con.query(sql, [...values,id], (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/users/:id', (req, res)=>{
    const sql = "DELETE FROM items WHERE id = ?";
    const id = req.params.id;
    con.query(sql, [id], (err,data)=> {
        if(err) return res.json("error");
        return res.json(data);
    })
})




app.listen(8082, ()=> {
    console.log("RUNNING");
})