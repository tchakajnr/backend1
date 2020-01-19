"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const announcement_1 = require("../../model/shared/announcement");
exports.apiGetAnnouncement = (req, res, next) => {
    res.json(data_1.DataStore.announcement.map((item) => new announcement_1.Announcement(item)));
};
