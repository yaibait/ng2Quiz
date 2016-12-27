import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  point:number;
  count:number;
  percent:number;
  constructor(private sharedService:SharedService,private router:Router,private location:Location) { 

  }

  ngOnInit() {
    // console.log(this.sharedService.resultPoint,this.sharedService.listQuestion);
    if(this.sharedService.resultPoint >= 0){
      this.point = this.sharedService.resultPoint;
      this.count = this.sharedService.listQuestion.length;
      this.percent = (this.point/this.count)* 100;
      this.sharedService.resultPoint = undefined;
    }else{
      this.router.navigate(["/"]);
    }

  }
  goHomeEvent(){
    this.router.navigate(['/']);
  }
  replayEvent(){
    this.location.back();
  }
}
