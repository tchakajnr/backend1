
 export class Announcement {
    id: string 
    publisher:string
    message:string
    constructor(data: any) {
        this.id=data.id;
        this.publisher = data.publisher;
        this.message = data.message;
    }
}