import express from "express"
import dotenv from "dotenv"
import { connect } from "./db/db.js";

const app=express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("Hello world")
})

const PORT=process.env.PORT||5000;
connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running in http://localhost:${PORT}`);
    })
})