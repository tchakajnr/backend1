import { DataStore } from "../../data/data";
import { RequestHandler} from "express";
import { PaymentDetails } from "../../model/shared/paymentDetails";

export const apiGetStudentPayments: RequestHandler = (req,res,next)=>{
    res.json(DataStore.payments.map((item:any)=> new PaymentDetails(item)));
};