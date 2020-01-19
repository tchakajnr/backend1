 
 export class StudentDetails {
    studentID: string
    firstName: string
    secondName: string
    major: string
    constructor(data: any) {
        this.studentID = data.studentID;
        this.firstName = data.firstName;
        this.secondName = data.secondName;
        this.major = data.major;
    }
}