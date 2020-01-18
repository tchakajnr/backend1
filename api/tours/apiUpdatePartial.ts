import {RequestHandler} from "express";
import { DataStore } from "../../data/data";

export const apiUpdatePartial: RequestHandler = (req,res,next)=>{
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item:any)=> item.id == tourID);
    if(tourIndex > -1){
        const originalTour = DataStore.tours[tourIndex];
        const newTour = {
            id: tourID,
            location:req.body.location || originalTour.location,
            tourTitle:req.body.tourTitle || originalTour.tourTitle,
            tourCategory:req.body.tourCategory || originalTour.tourCategory,
            tourDescription:req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price|| originalTour.price,
            currency:  req.body.currency || originalTour.currency,
            img:originalTour.img
    
        }
        DataStore.tours[tourIndex] = newTour;
        res.json({"status":"success","message":"Element succesfully updated!!!"});
    }else{
        res.json({"status":"Error","message":"Element not found"});
    }
    
    
};