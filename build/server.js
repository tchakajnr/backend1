"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const jsonParser = body_parser_1.default.json();
const urlEncodedParser = body_parser_1.default.urlencoded({ extended: true });
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetToursDetail_1 = require("./api/tours/apiGetToursDetail");
const apiCreateTours_1 = require("./api/tours/apiCreateTours");
const apiDelete_1 = require("./api/tours/apiDelete");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
const apiUpdatePartial_1 = require("./api/tours/apiUpdatePartial");
const apiGetStudentDetails_1 = require("./api/tours/apiGetStudentDetails");
const apiGetStudentPayments_1 = require("./api/tours/apiGetStudentPayments");
const apiSearchStudentPaymentDetails_1 = require("./api/tours/apiSearchStudentPaymentDetails");
const path_1 = __importDefault(require("path"));
const app = express_1.default();
// console.log(JSON.stringify(DataStore.students));
const logger = morgan_1.default("dev");
app.use(logger);
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
app.get("/", (req, res, next) => {
    res.send("Tour booking API");
});
//student get methods
app.get("/students", apiGetStudentDetails_1.apiGetStudentDetails);
app.get("/payments", apiGetStudentPayments_1.apiGetStudentPayments);
app.get("/payments/:id", apiSearchStudentPaymentDetails_1.apiSearchStudentPaymentDetails);
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetToursDetail_1.apiGetToursDetail);
app.post("/tours", jsonParser, apiCreateTours_1.apiCreateTour);
app.delete("/tours/:id", apiDelete_1.apiDelete);
app.put("/tours/:id", jsonParser, apiUpdateTour_1.apiUpdateTour);
app.patch("/tours/:id", jsonParser, apiUpdatePartial_1.apiUpdatePartial);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server has successfully started");
});
