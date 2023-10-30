import express from 'express';
import cors from 'cors';
import  NotesRoute  from "./Routes/NotesRoute.js"
import cookieParser from 'cookie-parser'
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(express.static("Public"))
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))



app.use(express.static("Public"))
app.use("/notesapp", NotesRoute)

app.listen(8088, () => {
    console.log("RUNNING")
})