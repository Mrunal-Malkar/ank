import express from "express";

const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
    res.send("this is basic code");
})

app.listen(PORT,(req,res)=>{
    console.log(`your app is running on port:${PORT}`);
})