"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const paymentDetails_1 = require("../../model/shared/paymentDetails");
exports.apiGetStudentPayments = (req, res, next) => {
    res.json(data_1.DataStore.payments.map((item) => new paymentDetails_1.PaymentDetails(item)));
};
