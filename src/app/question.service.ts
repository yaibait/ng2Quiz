import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class QuestionService {
  listQuestionSample:Question[];
  constructor() { }
  getQuestionPackById(_id:string):Question[]{
      var tempReturn:Question[] = testQuestion.slice(0) as Question[];
      tempReturn.forEach((element,index) => {
      element['title'] = "Question " + (index+1);
        element['isAnswer']= false;
        element.listAnswer.forEach(element => {
            element.isCorrect = false;
        });
      });

      return tempReturn;
  }
}

const testQuestion = [
  {
    "id": 1,
    "description": "Question 1 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 2,
    "description": "Question 2 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "description": "Question 3 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "description": "Question 4 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": false
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": false
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": false
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  }
];

