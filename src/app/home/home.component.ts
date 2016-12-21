import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Quiz } from '../quiz';
import { element } from 'protractor';
import { FirebaseListObservable } from 'angularfire2';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionService]
})
export class HomeComponent implements OnInit {
  homeQuizList;
  busy:Subscription;
  constructor(private questionService:QuestionService) { 
      
      
  }

  ngOnInit() {
      if(!this.homeQuizList){
        this.busy = this.questionService.getQuizPackList().subscribe((data) => {
              this.homeQuizList = data;
              this.busy = null;
          },(error) => {
              this.busy = null;
          });
        }
  }
  

}
