import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QuestionComponent } from '../question/question.component';

// import * as $ from 'JQuery';
// import { Ng2MaterialModule } from 'ng2-material';
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
  constructor(private questionService:QuestionService) {
      // $(".button-collapse").sideNav();
      console.log($(".button-collapse"));
      this.listQuesion = questionService.getQuestionPackById("1");
      console.log(this.listQuesion);
      this.currentQuestion = this.listQuesion[this.currentIndex];
      if(this.listQuesion.length == 1){
        this.showNext = false;
      }
   }

  ngOnInit() {
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
}
