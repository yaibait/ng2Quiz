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
import { CreateQuizComponent,CreateDialog } from './create-quiz/create-quiz.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { HomeComponent } from './home/home.component';


import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';
import {BusyModule} from 'angular2-busy';
import { ResultComponent } from './result/result.component';
import { SharedService } from './shared.service';
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';


export const firebaseConfig = {
    apiKey: "AIzaSyBn7QdIklo_nL47XggrSUVDYTiZ8fOOMJU",
    authDomain: "register-d729b.firebaseapp.com",
    databaseURL: "https://register-d729b.firebaseio.com",
    storageBucket: "register-d729b.appspot.com",
    messagingSenderId: "678531705163"
};

const appRouters:Routes = [
  {path : 'quiz-create',canActivate:[AuthService],component:CreateQuizComponent},
  {
    path: 'quiz-result',
    component:ResultComponent},
  {path: 'quiz-board/:id', component:QuizBoardComponent},
  {path: 'quiz-board', component:HomeComponent},
  {path: 'login', component:LoginComponent},  
  {path: '',component:HomeComponent}
];

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizBoardComponent,
    CreateQuizComponent,
    HomeComponent,
    ResultComponent,
    CreateDialog,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CKEditorModule,
    BusyModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    RouterModule.forRoot(appRouters),
    LoadingAnimateModule.forRoot()
  ],
  entryComponents: [
    CreateDialog
  ],
  providers: [
    SharedService,
    LoadingAnimateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
