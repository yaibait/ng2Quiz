import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs';

import { Answer } from '../answer';
import { Utils } from '../utils';
import { Quiz } from '../quiz';
import { SharedService } from '../shared.service';

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
  constructor(
    private questionService:QuestionService,
    private route:ActivatedRoute,
    private router:Router,
    private sharedService:SharedService,
    private location:Location
    ) {

    this.route.params.subscribe(params => {
      this.quizPackId = params['id'];
      if(!this.quizPackId){
        this.router.navigate(['/']);
      }

      this.questionService.getQuestionPackById(this.quizPackId,(pack) => {
          this.listQuesion = pack.questionList as Question[];
          this.currentQuestion = this.listQuesion[this.currentIndex];
          if(this.listQuesion.length == 1){
              this.showNext = false;
          }
      },() => {
          console.log("Error");
      });

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
      this.showNext = true;
    }
    if(this.currentIndex == this.listQuesion.length - 1){
      this.showBack = true;
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
        this.sharedService.resultPoint = result;
        this.sharedService.listQuestion = this.listQuesion;
        this.router.navigate(["quiz-result"]);
    });
  }

  backClickEvent(){
    this.router.navigate(['/']);
  }

}

