import express from "express"
import mysql from "mysql"
import cors from "cors"




const app = express();

app.listen(8810, ()=>{
    console.log("!!!!!!!")
})

app.use(cors())

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123Qwe45",
    database:"avion"
})

app.get("/", (req,res)=>{
    const q ="SELECT * FROM avion.products"
    db.query(q,(err,data)=>{
        if(err)return res.json(err)
        return res.json(data)

    })
})