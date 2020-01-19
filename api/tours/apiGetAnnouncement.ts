import { DataStore } from "../../data/data";
import { RequestHandler} from "express";
import { Announcement } from "../../model/shared/announcement";

export const apiGetAnnouncement: RequestHandler = (req,res,next)=>{
    res.json(DataStore.announcement.map((item:any)=> new Announcement(item)));
};