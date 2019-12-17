import { CourseUserStatus } from "./../../core/interfaces/enum";
import { ApiService } from "./../../core/services/api.service";
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
  regisResult: any = [{}];
  courseStatus = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get<any>("user/register/result")
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.regisResult = response;
        this.courseStatus = this.regisResult.map(course => {
          course.status = this.checkStatus(course.status);
          return course;
        });
      });
  }
  checkStatus(status: number): string {
    switch (status) {
      case CourseUserStatus.pending:
        return "Pending";
      case CourseUserStatus.registered:
        return "Registration Success";
      case CourseUserStatus.registerFailed:
        return "Registration Failed";
      case CourseUserStatus.graded:
        return "Registration Success";
    }
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
