import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule } from '@angular/material';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import {BusyModule} from 'angular2-busy';
import { ResultComponent } from './result/result.component';


export const firebaseConfig = {
    apiKey: "AIzaSyBn7QdIklo_nL47XggrSUVDYTiZ8fOOMJU",
    authDomain: "register-d729b.firebaseapp.com",
    databaseURL: "https://register-d729b.firebaseio.com",
    storageBucket: "register-d729b.appspot.com",
    messagingSenderId: "678531705163"
};

const appRouters:Routes = [
  {path : 'quiz-create', component:CreateQuizComponent},
  {path: 'quiz-result', component:ResultComponent},
  {path: 'quiz-board/:id', component:QuizBoardComponent},
  {path: '',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizBoardComponent,
    CreateQuizComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CKEditorModule,
    BusyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
