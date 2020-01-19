import express from "express";
import bodyparser from "body-parser";
import morgan from "morgan";




const jsonParser  = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: true});

import { DataStore } from "./data/data";
import {apiGetTours} from "./api/tours/apiGetTours";
import { apiGetToursDetail } from "./api/tours/apiGetToursDetail";
import { apiCreateTour } from "./api/tours/apiCreateTours";
import {apiDelete} from "./api/tours/apiDelete";
import {apiUpdateTour} from "./api/tours/apiUpdateTour";
import {apiUpdatePartial} from "./api/tours/apiUpdatePartial";
import {apiGetStudentDetails} from "./api/tours/apiGetStudentDetails";
import {apiGetStudentPayments} from "./api/tours/apiGetStudentPayments";
import {apiSearchStudentPaymentDetails} from "./api/tours/apiSearchStudentPaymentDetails";
import {apiAnnouncement} from "./api/tours/apiAnnouncement";
import {apiGetAnnouncement} from "./api/tours/apiGetAnnouncement";
import {apiDeleteAnnouncement} from "./api/tours/apiDeleteAnnouncement";
import {apiUpdateAnnouncement} from "./api/tours/apiUpdateAnnouncement";

import path from "path";


const app = express();

// console.log(JSON.stringify(DataStore.students));
const logger = morgan("dev");
app.use(logger);

app.use("/static",express.static(path.resolve("./","public","img")));

app.get("/",(req,res,next)=>{
    res.send("Tour booking API");
});

//student get methods
app.get("/students",apiGetStudentDetails);
app.get("/payments",apiGetStudentPayments);
app.get("/payments/:id",apiSearchStudentPaymentDetails);
app.get("/announcement",apiGetAnnouncement);



app.post("/announcement",jsonParser, apiAnnouncement);

 

app.get("/tours",apiGetTours);

app.get("/tours/:id",apiGetToursDetail);


app.post("/tours",jsonParser, apiCreateTour);
 

app.delete("/tours/:id",apiDelete);

app.delete("/announcement/:id",apiDeleteAnnouncement);

app.put("/tours/:id",jsonParser,apiUpdateTour);

app.patch("/tours/:id",jsonParser,apiUpdatePartial);
app.patch("/announcement/:id",jsonParser,apiUpdateAnnouncement);



app.listen(process.env.PORT||8091,()=>{console.log("Server has successfully started");
});
