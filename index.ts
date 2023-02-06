import express, { Application,Request,Response } from "express"
import router from "./router/storeRouter";
const app:Application = express()
app.use  (express.json());
require("./config/db")
const PORT = 1894;


app.get("/", (req:Request,res:Response):Response =>{
    return res.status(200).json({
        message:"Server is up and running"
    })
})
 
app.use("/api", router)
app.listen(PORT,()=>{
    console.log("Server is listening")
})