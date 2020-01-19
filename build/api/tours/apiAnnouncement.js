"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
exports.apiAnnouncement = (req, res, next) => {
    const newAnnouncement = {
        id: v4_1.default(),
        publisher: req.body.publisher || "",
        message: req.body.message || ""
    };
    data_1.DataStore.announcement.push(newAnnouncement);
    res.send("New announcement Added");
};
