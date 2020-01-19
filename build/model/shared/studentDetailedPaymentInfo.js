"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentDetails_1 = require("./studentDetails");
const paymentDetails_1 = require("./paymentDetails");
class StudentDetailedPaymentInfo extends paymentDetails_1.PaymentDetails {
    constructor(studentData, paymentData) {
        super(studentData);
        this.January = studentData.January;
        this.February = studentData.February;
        this.March = studentData.March;
        this.student = paymentData.map((item) => new studentDetails_1.StudentDetails(item));
    }
}
exports.StudentDetailedPaymentInfo = StudentDetailedPaymentInfo;
