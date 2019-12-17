import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { takeUntil } from "rxjs/operators";
import { Grade } from "src/app/core/interfaces/enum";

@Component({
  selector: "app-grade",
  templateUrl: "./grade.page.html",
  styleUrls: ["./grade.page.scss"]
})
export class GradePage implements OnInit, OnDestroy {
  destroy$ = new Subject();
  regisResult: any = [{}];
  courseStatus = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get<any>("user/grade")
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.regisResult = response;
        this.courseStatus = this.regisResult.map(course => {
          course.grade = Grade[course.grade];
          return course;
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
