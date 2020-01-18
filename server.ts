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
import {apiUploadImage} from "./api/tours/apiUploadImage";

import path from "path";


const app = express();

// console.log(JSON.stringify(DataStore.students));
const logger = morgan("dev");
app.use(logger);

app.use("/static",express.static(path.resolve("./","public","img")));

app.get("/",(req,res,next)=>{
    res.send("Tour booking API");
});

app.get("/tours",apiGetTours);

app.get("/tours/:id",apiGetToursDetail);


app.post("/tours",jsonParser, apiCreateTour);
app.post("/tours/:id/img",apiUploadImage);

app.delete("/tours/:id",apiDelete);

app.put("/tours/:id",jsonParser,apiUpdateTour);

app.patch("/tours/:id",jsonParser,apiUpdatePartial);


app.listen(process.env.PORT||8091,()=>{console.log("Server has successfully started");
});
