import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule } from '@angular/material';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBn7QdIklo_nL47XggrSUVDYTiZ8fOOMJU",
    authDomain: "register-d729b.firebaseapp.com",
    databaseURL: "https://register-d729b.firebaseio.com",
    storageBucket: "register-d729b.appspot.com",
    messagingSenderId: "678531705163"
};

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizBoardComponent,
    CreateQuizComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CKEditorModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
