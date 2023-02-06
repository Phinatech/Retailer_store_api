import mongoose from "mongoose";

interface stores {
    name:string,
    address:string,
    tagNo:string,
    snacks:{}
    softdrinks:{}
}

interface istores extends stores, mongoose.Document{}

const storeScheme = new mongoose.Schema({
      name:String,
    address:String,
    tagNo:String,
    snacks:Object,
    softdrinks:{}
}, {timestamps:true})

const juStoresModel = mongoose.model<istores>("JudithStore",storeScheme)

export default juStoresModel

