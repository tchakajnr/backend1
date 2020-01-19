"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const studentDetailedPaymentInfo_1 = require("../../model/shared/studentDetailedPaymentInfo");
exports.apiSearchStudentPaymentDetails = (req, res, next) => {
    const studentId = req.params.id;
    const searchedStudent = data_1.DataStore.payments.find((element) => element.studentID == studentId);
    if (searchedStudent) {
        const selectedStudent = data_1.DataStore.students.filter((item) => item.studentID == studentId);
        res.json(new studentDetailedPaymentInfo_1.StudentDetailedPaymentInfo(searchedStudent, selectedStudent));
    }
    else {
        res.json({ "status": "false", "message": "Student number not found!" });
    }
};
