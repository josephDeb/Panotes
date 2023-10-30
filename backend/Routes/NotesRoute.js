import express from "express";
import con from '../utils/db.js'
import multer from 'multer';
import path from 'path';
const router = express.Router();

router.get("/notes", (req, res) => {
    const sql = "SELECT * FROM note";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})



// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end image upload

router.post("/add_note",upload.single("image"), (req, res) => {
    const sql = "INSERT INTO note (mynotes,title,image) VALUES (?)";
    const values = [
        req.body.mynotes,
        req.body.title,
        req.file.filename
    ]
    con.query(sql, [values], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query error"})
        return res.json({Status: true, Result: result})
    })
})

router.get("/notes/:id", (req, res) => {
    const sql = "SELECT * FROM note WHERE id = ?";
    const id = req.params.id;
    con.query(sql,[id], (err, result) => {
        if(err) res.json({Status: false, Error: "Query error"})
        return res.json({Status: true, Result: result})
    })
})

router.put("/update_note/:id",upload.single("image"), (req, res) => {
    const sql = "UPDATE note set mynotes = ?, title = ? WHERE id = ?";
    const id = req.params.id;
    const values = [req.body.mynotes, req.body.title]
    con.query(sql,[...values,id], (err, result) => {
        if(err) res.json({Status: false, Error: "Query error"})
        return res.json({Status: true, Result: result})
    })
})

router.delete("/delete_note/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM note WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query error"+err})
        return res.json({Status: true, Result: result})
    })
})

 
export default router