
 export class PaymentDetails {
    studentID: string
    January :number
    February:number
    March:number
    constructor(data: any) {
        this.studentID = data.studentID;
        this.January = data.January;
        this.February=data.February;
        this.March=data.March;
    }
}