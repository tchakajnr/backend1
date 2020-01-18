import {RequestHandler} from "express";
import { DataStore } from "../../data/data";

export const apiDelete: RequestHandler = (req,res,next)=>{
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item:any)=> item.id == tourID);
    if(tourIndex > -1){
        DataStore.tours.splice(tourIndex,1);
        res.json({"status":"success","message":"Element succesfully removed!!!"});
    }else{
        res.json({"status":"Error","message":"Element not found"});
    }
    
};