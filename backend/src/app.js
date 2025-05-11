import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js"
import { connect } from "node:http2";
import { connectionToSocket } from "./controllers/socket.io.js";
const app=express();
const server=createServer(app);
const io=connectionToSocket(server);

app.use(cors())
app.use(express.json({limit:"40kb" }) )
app.use(express.urlencoded({limit:"40kb",extended:true}));
mongoose.connect("mongodb+srv://harsha:cce23021@cluster0.r9ndq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err)

})
app.use("/api/v1/users",userRoutes);
app.get("/home",(req,res)=>{
    return res.json({
        "hello":"world"
    })

})
server.listen(8080,()=>{
    console.log("hello world");
})