import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs';
// import * as $ from 'JQuery';
// import { Ng2MaterialModule } from 'ng2-material';
import { Answer } from '../answer';
import { Utils } from '../utils';
import { Quiz } from '../quiz';
@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.css'],
  providers: [QuestionService]
})
export class QuizBoardComponent implements OnInit {
  listQuesion:Question[];
  currentQuestion:Question;
  currentIndex = 0;
  showNext:boolean = true;
  showBack:boolean = false;
  listAnswerTemp:Answer[];
  completeQuiz:boolean = false;
  quizPackId:string;
  constructor(private questionService:QuestionService,private route:ActivatedRoute) {

    //     this.route.params.switchMap( (params:Params) => this.questionService.getQuestionPackById(params['id'])).subscribe(data => {
    //     // console.log(data);
    //     let pack = data as Quiz;
    //     console.log(pack);
    //     this.listQuesion = pack.questionList as Question[];
    //     // this.listQuesion = pack.questionList;
        
    //     this.currentQuestion = this.listQuesion[this.currentIndex];
    //     if(this.listQuesion.length == 1){
    //       this.showNext = false;
    //     }
    // },error => {
    //     console.log(error);
    // });


    this.route.params.subscribe(params => {
      this.quizPackId = params['id'];
      this.questionService.getQuestionPackById(this.quizPackId,(pack) => {
          this.listQuesion = pack.questionList as Question[];
          this.currentQuestion = this.listQuesion[this.currentIndex];
          if(this.listQuesion.length == 1){
              this.showNext = false;
          }
      })
    })

    

   }

  ngOnInit() {


    // this.listQuesion = this.questionService.getQuestionPackById("1");


  }
  nextBtnEvent($e){
    if(this.currentIndex < this.listQuesion.length - 1){
      this.currentIndex++;
      this.currentQuestion = this.listQuesion[this.currentIndex];
      this.checkShowNextBack();
    }
    
  }
  backBtnEvent($e){
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.currentQuestion = this.listQuesion[this.currentIndex];
      this.checkShowNextBack();
    }
  }

  checkShowNextBack(){
    if(this.currentIndex >= 1 && this.currentIndex < this.listQuesion.length){
      this.showNext = true;
      this.showBack = true;
    } 
    if(this.currentIndex == 0){
      this.showBack = false;
    }
    if(this.currentIndex == this.listQuesion.length - 1){
      this.showNext = false;
    }
    
  }

  sliderbarClickEvent(question){
    this.currentQuestion = question;
    this.currentIndex = this.listQuesion.indexOf(this.currentQuestion);
    
    this.checkShowNextBack();
  }

  getAnswerEvent(obj){
    //console.log(obj);
    this.checkQuizComplete();

  }

  checkQuizComplete(){

      for(var i = 0; i < this.listQuesion.length; i++){
          var aQuestion = this.listQuesion[i];
          if(!aQuestion.isAnswer){
            this.completeQuiz = false;
            return;
        }
      }
      
      this.completeQuiz = true;
  }
  
  submitQuiz(){
    this.questionService.getResultQuiz(this.quizPackId,this.listQuesion,(result) =>{
        console.log(result);
    });
    
  }
}
