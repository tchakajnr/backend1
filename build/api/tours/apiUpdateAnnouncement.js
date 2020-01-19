"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiUpdateAnnouncement = (req, res, next) => {
    const announcementID = req.params.id;
    const announcementIndex = data_1.DataStore.announcement.findIndex((item) => item.id == announcementID);
    if (announcementIndex > -1) {
        const originalAnnouncement = data_1.DataStore.announcement[announcementIndex];
        const newAnnouncement = {
            id: announcementID,
            message: req.body.message || originalAnnouncement.message,
            publisher: req.body.publisher || originalAnnouncement.publisher
        };
        data_1.DataStore.announcement[announcementIndex] = newAnnouncement;
        res.json({ "status": "success", "message": "Element succesfully updated!!!" });
    }
    else {
        res.json({ "status": "Error", "message": "Element not found" });
    }
};
