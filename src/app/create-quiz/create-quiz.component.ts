import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { Quiz } from '../quiz';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
  providers: [QuestionService]
})
export class CreateQuizComponent implements OnInit,AfterViewInit {
  listQuestion:Question[] = [];
  currentQues:Question;
  lastTabIndex:number = 1;
  data:string = "";
  currentQuesId:number = 1;
  currentAnsId:number = 1;
  quiz:Quiz;
  constructor(private questionService:QuestionService) { 
    var startQuestion = new Question();
    startQuestion.id = this.currentQuesId;
    this.currentQues = startQuestion;
    
    this.listQuestion.push(this.currentQues);
    this.quiz = new Quiz();
    this.quiz.questionList = this.listQuestion;
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
  }
  addQuestionEvent(){
    var aQues = new Question();
    aQues.id = this.currentQuesId++;
    this.currentAnsId = 1;
    this.currentQues = aQues;
    this.listQuestion.push(this.currentQues);
    this.lastTabIndex++;
  }
  removeQuestionEvent(){
    if(this.listQuestion.length > 1){
      var index = this.listQuestion.indexOf(this.currentQues) as number;
      this.listQuestion.splice(index,1);
      this.currentQues = this.listQuestion[this.listQuestion.length - 1];
     }
  }
  addAnswerEvent(_question:Question){
    var id = this.currentAnsId++; 
    _question.listAnswer.push(new Answer(id));
    
  }
  changeTabEvent(event){
    this.currentQues = this.listQuestion[event.index];
  }
  removeAAnswer(_question:Question,_answer:Answer){
     var index = _question.listAnswer.indexOf(_answer) as number;
    _question.listAnswer.splice(index,1);
    
  }
  
  saveQuestionEvent(){
    // console.log(this.listQuestion);
    this.data = JSON.stringify(this.quiz);
    this.questionService.saveQuizPack(this.quiz).then(() => {
        console.log("success");
    },
    () => {
      console.log("Fail");
    })
  }
}
