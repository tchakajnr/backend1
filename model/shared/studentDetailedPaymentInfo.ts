import { StudentDetails } from "./studentDetails";
import { PaymentDetails } from "./paymentDetails";

export class StudentDetailedPaymentInfo extends PaymentDetails {
    January :number
    February:number
    March:number
    student: StudentDetails[]
    constructor(studentData: any, paymentData: any) {
        super(studentData);
        this.January = studentData.January;
        this.February = studentData.February;
        this.March = studentData.March
        this.student = paymentData.map((item: any) => new StudentDetails(item));
    }
}