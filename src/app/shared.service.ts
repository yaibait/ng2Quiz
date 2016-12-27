import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class SharedService{
  resultPoint:number;
  listQuestion:Question[];
  resultListQuestion:any;
  quizId:string;
  constructor() { }
}
