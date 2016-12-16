import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit,AfterViewInit {
  listQuestion:Question[] = [];
  currentQues:Question;
  lastTabIndex:number = 1;
  constructor() { 
    this.currentQues = new Question();
    this.listQuestion.push(this.currentQues);
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
  }
  addQuestionEvent(){
    this.currentQues = new Question();
    this.listQuestion.push(this.currentQues);
    this.lastTabIndex++;
  }
  removeQuestionEvent(){
    console.log("dfdfd");
  }
  addAnswerEvent(_question:Question){
    _question.listAnswer.push(new Answer());
    
  }
  changeTabEvent(event){
    this.currentQues = this.listQuestion[event.index];
    
  }
  removeAAnswer(_question:Question,_answer:Answer){
     var index = _question.listAnswer.indexOf(_answer) as number;
    _question.listAnswer.splice(index,1);
    
  }
  
}
