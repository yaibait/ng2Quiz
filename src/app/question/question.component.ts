import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question:Question;
  tempAnswerChoise:Answer;
  @Input()  set setQuestion(tempQuestion:Question){
        this.question = tempQuestion;
        this.tempAnswerChoise = this.question.listAnswer.find((element, index, array) => {
            return element.isCorrect == true;
        })
  }
  @Output() choiseAnswer = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  choiseAnswerEvent(obj:Answer){
    obj.isCorrect = true;
    this.question.isAnswer = true;
    this.question.listAnswer.forEach(element => {
        if(element != obj){
          console.log(element);
          element.isCorrect = false;
        }
    });
    this.choiseAnswer.emit(obj);
  }
}
