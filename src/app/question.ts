import { Answer } from './answer';
export class Question {
    id:number;
    title:string = "";
    description = "";
    listAnswer:Answer[] = [];
    isAnswer:boolean = false;
}
