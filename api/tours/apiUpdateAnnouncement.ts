import {RequestHandler} from "express";
import { DataStore } from "../../data/data";

export const apiUpdateAnnouncement: RequestHandler = (req,res,next)=>{
    const announcementID = req.params.id;
    const announcementIndex = DataStore.announcement.findIndex((item:any)=> item.id == announcementID);
    if(announcementIndex > -1){
        const originalAnnouncement = DataStore.announcement[announcementIndex];
        const newAnnouncement = {
            id: announcementID ,
            message:req.body.message || originalAnnouncement.message,
            publisher:req.body.publisher|| originalAnnouncement.publisher
        }
        DataStore.announcement[announcementIndex] = newAnnouncement;
        res.json({"status":"success","message":"Element succesfully updated!!!"});
    }else{
        res.json({"status":"Error","message":"Element not found"});
    }
    
    
};