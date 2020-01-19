"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const students_json_1 = __importDefault(require("./students.json"));
const tours_json_1 = __importDefault(require("./tours.json"));
const reviews_json_1 = __importDefault(require("./reviews.json"));
const paymentRecord_json_1 = __importDefault(require("./paymentRecord.json"));
const announcement_json_1 = __importDefault(require("./announcement.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.students = students_json_1.default;
DataStore.tours = tours_json_1.default;
DataStore.reviews = reviews_json_1.default;
DataStore.payments = paymentRecord_json_1.default;
DataStore.announcement = announcement_json_1.default;
