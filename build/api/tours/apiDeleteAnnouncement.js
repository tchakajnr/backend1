"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiDeleteAnnouncement = (req, res, next) => {
    const announcementID = req.params.id;
    const announcementIndex = data_1.DataStore.announcement.findIndex((item) => item.id == announcementID);
    if (announcementIndex > -1) {
        data_1.DataStore.announcement.splice(announcementIndex, 1);
        res.json({ "status": "success", "message": "Element succesfully removed!!!" });
    }
    else {
        res.json({ "status": "Error", "message": "Element not found" });
    }
};
