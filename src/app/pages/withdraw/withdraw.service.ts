import { Injectable, OnDestroy } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { takeUntil, map, pluck, filter, tap } from "rxjs/operators";
import { RegisteredCourse } from "src/app/core/interfaces/regiscourse";
import { ICourseInputDTO } from "src/app/core/interfaces/icourse";
import { saveAs } from "file-saver";

@Injectable({
  providedIn: "root"
})
export class WithdrawService implements OnDestroy {
  coursesAvailable$: Observable<ICourseInputDTO[]>;
  destroy$ = new Subject();
  coursesToWithdraw$ = new BehaviorSubject<ICourseInputDTO[]>([]);

  constructor(private apiService: ApiService) {
    this.coursesAvailable$ = this.apiService
      .get<RegisteredCourse[]>("user/courses")
      .pipe(
        takeUntil(this.destroy$),
        filter(courses => courses.length !== 0),
        map(courses =>
          courses
            .filter(course => {
              return course.status === 1;
            })
            .map(course => course.data)
        )
      ) as Observable<ICourseInputDTO[]>;
  }

  withdraw() {
    const withdrawCoursesId = this.coursesToWithdraw$.value.map(course => {
      return course.uuid;
    });
    return this.apiService
      .post("user/withdraw", withdrawCoursesId as any, { responseType: "blob" })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        saveAs(res, "report.pdf");
      });
  }

  addCourse(course: ICourseInputDTO) {
    const courses = [...this.coursesToWithdraw$.value];
    courses.push(course);
    this.coursesToWithdraw$.next(courses);
  }

  removeCourse(course: ICourseInputDTO) {
    const courses = [...this.coursesToWithdraw$.value];
    const index = courses.findIndex(courseToWithdraw => {
      return courseToWithdraw.uuid === course.uuid;
    });
    courses.splice(index);
    this.coursesToWithdraw$.next(courses);
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
