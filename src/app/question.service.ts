import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class QuestionService {
  listQuestionSample:Question[];
  constructor() { }
  getQuestionPackById(_id:string):Question[]{



      return testQuestion;
  }
}

const testQuestion = [
  {
    "id": 1,
    "title": "Question 1",
    "description": "Question 1 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": true
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
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
    "title": "Question 2",
    "description": "Question 2 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": true
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 3,
    "title": "Question 3",
    "description": "Question 3 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": true
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 4,
    "title": "Question 4",
    "description": "Question 4 description",
    "listAnswer": [
      {
        "id": 1,
        "content": "Answer 1",
        "isCorrect": true
      },
      {
        "id": 2,
        "content": "Answer 2",
        "isCorrect": true
      },
      {
        "id": 3,
        "content": "Answer 3",
        "isCorrect": true
      },
      {
        "id": 4,
        "content": "Answer 4",
        "isCorrect": true
      }
    ]
  }
];

