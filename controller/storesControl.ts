import juStoresModel from "../model/storesModel";

import {Request,Response} from "express"

const gettingData=async (req:Request,res:Response):Promise<Response> => {
    try {
        const GetingStore = await juStoresModel.find()
        return res.status(200).json({
            message:"Stores data has been gotten successfully",
            data:GetingStore
        })
    } catch (error) {
      return res.status(404).json({
        message:"An error occurred",
        data:error
      })  
    }
}

const gettingOneData =async (req:Request,res:Response):Promise<Response> => {
    try {
       const Onedata = await juStoresModel.findById(req.params.id) 
       return res.status(200).json({
        message:"Store data gotton succefully",
        data: Onedata
       })
    } catch (error) {
     return res.status(404).json({
        message:"An error occured",
        data:error
     })   
    }
}

const postStores =async (req:Request, res:Response):Promise<Response> => {
    try {
        const{name,address,snacks,softdrinks}= req.body
        let space = name.replaceAll(" ","").toLowerCase()
        const creatingtores = await juStoresModel.create({
            name,
            address,
            snacks,
            softdrinks,
            tagNo:`${space}${Math.floor(Math.random()*100)}`
        },{new:true})

        return res.status(201).json({
            message:"Store data sucefully created",
            data:creatingtores
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occurred",
            data:error
        })
    }
}

export  {gettingData,gettingOneData,postStores}