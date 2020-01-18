import studentsLog from "./students.json";
import tourDetails from "./tours.json";
import tourReviews from "./reviews.json";

export class DataStore {
    static students = studentsLog;
    static tours = tourDetails;
    static reviews = tourReviews;
}