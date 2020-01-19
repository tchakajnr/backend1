import { DataStore } from "../../data/data";
import { RequestHandler} from "express";
import { StudentDetailedPaymentInfo } from "../../model/shared/studentDetailedPaymentInfo";
 

export const apiSearchStudentPaymentDetails: RequestHandler = (req,res,next)=>{
     const studentId = req.params.id;
     const searchedStudent = DataStore.payments.find((element:any)=> element.studentID == studentId);
     if(searchedStudent){
        const selectedStudent = DataStore.students.filter((item:any)=>item.studentID == studentId);
         res.json(new StudentDetailedPaymentInfo(searchedStudent,selectedStudent));
     }else{
         res.json({"status":"false","message":"Student number not found!"});
     }
};

