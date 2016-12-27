import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Quiz } from '../quiz';
import { element } from 'protractor';
import { FirebaseListObservable } from 'angularfire2';
import {Subscription} from 'rxjs';
import { LoadingAnimateService } from 'ng2-loading-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionService]
})
export class HomeComponent implements OnInit {
  homeQuizList;
  constructor(private questionService:QuestionService,private _loadingSvc: LoadingAnimateService) { 
      
      
  }

  ngOnInit() {
      if(!this.homeQuizList){
        this._loadingSvc.setValue(true);
        this.questionService.getQuizPackList().subscribe((data) => {
              
              this.homeQuizList = data;
              this._loadingSvc.setValue(false);
          },(error) => {
            
              console.log(error);
             //this._loadingSvc.setValue(false);
          });
        }
  }
  

}
