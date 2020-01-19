import {RequestHandler} from "express";
import { DataStore } from "../../data/data";

export const apiUpdateTour: RequestHandler = (req,res,next)=>{
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item:any)=> item.id == tourID);
    if(tourIndex > -1){
        const newTour = {
            id: tourID,
            location:req.body.location || "",
            tourTitle:req.body.tourTitle || "",
            tourCategory:req.body.tourCategory || "",
            tourDescription:req.body.tourDescription || "",
            price: req.body.price|| "",
            currency:  req.body.currency || ""
             
        }
        DataStore.tours[tourIndex] = newTour;
        res.json({"status":"success","message":"Element succesfully updated!!!"});
    }else{
        res.json({"status":"Error","message":"Element not found"});
    }
    
    
};