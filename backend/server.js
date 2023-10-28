import express from 'express';
import cors from 'cors';
import notesRoute from './Routes/NotesRoute.js'

const app = express(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use("/mynotes", notesRoute)

app.listen(8088, () => {
    console.log("RUNNING")
})