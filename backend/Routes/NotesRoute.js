import express from "express";
import con from '../utils/db.js'

const router = express.Router();

router.get("/notes", (req, res) => {
    const sql = "SELECT * FROM note";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

export default router