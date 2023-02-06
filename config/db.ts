import mongoose from "mongoose";

const URI = "mongodb://localhost/stores"

mongoose.connect(URI)
mongoose.connection.on("open", ()=>{
    console.log("Database connected")
})

.once("error",()=>{
    console.log("An error occured while connecting to database")
})