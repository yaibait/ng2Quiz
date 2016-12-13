export class Answer {
    id:number;
    content:string="";
    isCorrect:boolean= false;
    constructor(_id:number,_content:string,_isCorrect:boolean){
        this.id = _id;
        this.content = _content;
        this.isCorrect = _isCorrect;
    }
}
