export class Answer {
    id:number;
    content:string="";
    isCorrect:boolean= false;

    
    constructor(_id?:number,_content?:string,_isCorrect:boolean = false){
        this.id = _id;
        this.content = _content;
        this.isCorrect = _isCorrect;
    }
}
