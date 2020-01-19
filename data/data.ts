import studentsLog from "./students.json";
import tourDetails from "./tours.json";
import tourReviews from "./reviews.json";
import paymentRecord from "./paymentRecord.json";
import announcement from "./announcement.json";

export class DataStore {
    static students = studentsLog;
    static tours = tourDetails;
    static reviews = tourReviews;
    static payments = paymentRecord;
    static announcement = announcement;
}