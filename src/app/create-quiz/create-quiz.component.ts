import { Component, OnInit,AfterViewInit } from '@angular/core';
import {Location} from '@angular/common';
import { Question } from '../question';
import { Answer } from '../answer';
import { Quiz } from '../quiz';
import { QuestionService } from '../question.service';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AngularFire,AuthProviders, AuthMethods  } from 'angularfire2';
@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
  providers: [QuestionService]
})
export class CreateQuizComponent implements OnInit,AfterViewInit {
  mdDialogRef: MdDialogRef<CreateDialog>

  listQuestion:Question[] = [];
  currentQues:Question;
  lastTabIndex:number = 1;
  data:string = "";
  currentQuesId:number = 1;
  currentAnsId:number = 1;
  quiz:Quiz;
  valid:boolean = true;
  error:string = "";
  constructor(
    private questionService:QuestionService,
    private location:Location,
    public dialog:MdDialog,
    public sharedService:SharedService,
    public af:AngularFire,
    public router:Router
    ) { 
    var startQuestion = new Question();
    startQuestion.id = this.currentQuesId++;
    this.currentQues = startQuestion;
    
    this.listQuestion.push(this.currentQues);
    this.quiz = new Quiz();
    this.quiz.questionList = this.listQuestion;
    this.addAnswerEvent(startQuestion);
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
    this.addAnswerEvent(aQues);
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
    if(_question.listAnswer.length > 1){
      var index = _question.listAnswer.indexOf(_answer) as number;
      _question.listAnswer.splice(index,1);
    }
     
  }
  
  saveQuestionEvent(){
    // console.log(this.listQuestion);
    // this.data = JSON.stringify(this.quiz);
    if(this.validationQuiz()){
            this.valid = true;
            console.log(this.quiz);
            this.questionService.saveQuizPack(this.quiz).then((data) => {
            this.sharedService.quizId = data.key;
            this.mdDialogRef = this.dialog.open(CreateDialog,{
              disableClose: true
            });
        },
        () => {
          console.log("Fail");
        });
    }else{
      this.valid = false;
    }


  }
  validationQuiz():boolean{
    // check title
    if(this.quiz.title == ""){
      this.error = "Title is required";
      return false;
    }
    // check question 
    let ques = this.quiz.questionList;
    for(let i = 0; i < ques.length; i++){
        let aQues = ques[i];
        if(aQues.description == "" || aQues.description == undefined){
            this.error = "Question description is required";
            return false;
        }
        // check answer
        let answerList = aQues.listAnswer;
        for(let j = 0; j < answerList.length; j++){
           let aAnswer = answerList[j];
           if(aAnswer.content == "" || aAnswer.content == undefined){
             this.error = "Answer description is required";
              return false;
           }
        }
    }
    return true;
    
  }
  backClickEvent(){
    //this.location.back();
    this.router.navigate(["/"]);
  }
}

@Component({
  selector: 'create-dialog',
  template: `
      <div>
        <h4>Create Quiz Success !</h4>
        <input type="text" value="{{quizLink}}">
      </div>
      <button md-button (click)="gotoHome()">Home</button>
      <button md-button (click)="gotoQuiz()">Go To Quiz</button>
  `
})
export class CreateDialog {
  quizLink:string;
  constructor(public dialogRef: MdDialogRef<CreateDialog>,private sharedService:SharedService,private router:Router) { 
      this.quizLink = "http://quiz.binhnd.xyz/quiz-board/"+this.sharedService.quizId;
  }
  gotoHome(){
    this.router.navigate(["/"]);
    this.dialogRef.close();
  }
  gotoQuiz(){
    this.router.navigate(["quiz-board",this.sharedService.quizId]);
    this.dialogRef.close();
  }
}
