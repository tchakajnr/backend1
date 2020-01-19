import {RequestHandler} from "express";
import { DataStore } from "../../data/data";

export const apiDeleteAnnouncement: RequestHandler = (req,res,next)=>{
    const announcementID = req.params.id;
    const announcementIndex = DataStore.announcement.findIndex((item:any)=> item.id == announcementID);
    if(announcementIndex > -1){
        DataStore.announcement.splice(announcementIndex,1);
        res.json({"status":"success","message":"Element succesfully removed!!!"});
    }else{
        res.json({"status":"Error","message":"Element not found"});
    }
    
};