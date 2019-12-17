import { CourseUserStatus } from './../../core/interfaces/enum';
import { ApiService } from "./../../core/services/api.service";

import { AuthService } from "src/app/core/services/auth.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-regisout",
  templateUrl: "./regisout.page.html",
  styleUrls: ["./regisout.page.scss"]
})
export class RegisoutPage implements OnInit, OnDestroy {
  destroy$ = new Subject();
  regisResult: any= [{}];
  courseStatus = [];
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService
      .get<any>("user/register/result")
      .pipe(takeUntil(this.destroy$))
      .subscribe(response=>{
        console.log(response);
        this.regisResult = response;
        this.courseStatus = this.regisResult.map(course=> {
          course.status = this.checkStatus(course.status);
          return course;
        });
        console.log(this.courseStatus)
      });
  }
  checkStatus(status: number): string {
    switch(status) {
      case CourseUserStatus.pending:
        
    }
  }
 

  ngOnDestroy() {
    this.destroy$.complete();

  }
}
