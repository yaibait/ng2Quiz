import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
