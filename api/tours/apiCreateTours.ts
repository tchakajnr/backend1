import {RequestHandler} from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

export const apiCreateTour: RequestHandler=(req,res,next)=>{
    const newTour = {
        id: uuid(),
        location:req.body.location || "",
        tourTitle:req.body.tourTitle || "",
        tourCategory:req.body.tourCategory || "",
        tourDescription:req.body.tourDescription || "",
        price: req.body.price|| "",
        currency:  req.body.currency || "",
        img:[]

    }
    DataStore.tours.push(newTour);
    res.send("New tour added");
};