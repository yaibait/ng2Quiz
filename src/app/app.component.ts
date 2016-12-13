import { Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { Question } from './question';
import { Answer } from './answer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'app works!';
  aQuestion:Question;
  constructor(private questionService:QuestionService){
    this.aQuestion = new Question()
    // this.aQuestion.description = "This is a question description";
    // this.aQuestion.title = "This is a question title";
    // this.aQuestion.id = 1;
    // this.aQuestion.listAnswer.push(new Answer(1,"Answer 1",true));
    // this.aQuestion.listAnswer.push(new Answer(2,"Answer 2",false));
    // this.aQuestion.listAnswer.push(new Answer(3,"Answer 3",false));
  }
}
