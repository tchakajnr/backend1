"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const studentDetails_1 = require("../../model/shared/studentDetails");
exports.apiGetStudentDetails = (req, res, next) => {
    res.json(data_1.DataStore.students.map((item) => new studentDetails_1.StudentDetails(item)));
};
