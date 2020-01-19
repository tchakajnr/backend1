import { DataStore } from "../../data/data";
import { RequestHandler} from "express";
import { StudentDetails } from "../../model/shared/studentDetails";

export const apiGetStudentDetails: RequestHandler = (req,res,next)=>{
    res.json(DataStore.students.map((item:any)=> new StudentDetails(item)));
};