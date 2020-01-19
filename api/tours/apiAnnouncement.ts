import {RequestHandler} from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

export const apiAnnouncement: RequestHandler=(req,res,next)=>{
    const newAnnouncement = {
        id: uuid(),
        publisher:req.body.publisher || "",
        message:req.body.message || ""

    }
    DataStore.announcement.push(newAnnouncement);
    res.send("New announcement Added");
};