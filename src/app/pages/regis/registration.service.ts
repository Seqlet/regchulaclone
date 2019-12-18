import { ICourseInputDTO } from "./../../core/interfaces/icourse";
import { ApiService } from "./../../core/services/api.service";
import { Injectable, OnDestroy } from "@angular/core";
import { takeUntil, map, filter, tap, shareReplay } from "rxjs/operators";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class RegistrationService implements OnDestroy {
  destroy$ = new Subject();
  availableCourses$: Observable<ICourseInputDTO[]>;
  availableCourses: ICourseInputDTO[];
  availableCoursesByID$: Observable<{ key: string; value: string }[]>;
  coursesToRegister$ = new BehaviorSubject<any[]>([]);

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
    this.availableCourses$ = this.apiService
      .get<ICourseInputDTO[]>("commons/courses")
      .pipe(
        takeUntil(this.destroy$),
        shareReplay(1),
        map(courses => {
          return courses.filter(course => {
            const requiredStudentType = this.authService.userInfo$.value
              .studentType;
            return course.studentType === requiredStudentType;
          });
        })
      );
    this.availableCourses$.subscribe(courses => {
      this.availableCourses = courses;
    });
    this.availableCoursesByID$ = this.availableCourses$.pipe(
      takeUntil(this.destroy$),
      filter(courses => courses !== undefined),
      map(courses =>
        courses.map(course => {
          return { key: course.uuid, value: course.courseNumber };
        })
      )
    );
  }

  addCourse() {
    const courseToRegister = [...this.coursesToRegister$.value];
    courseToRegister.push({});
    this.coursesToRegister$.next(courseToRegister);
  }

  setSectionNumber(sectionNumber, index: number) {
    const courseToRegister = [...this.coursesToRegister$.value];
    courseToRegister[index].sectionNumber = sectionNumber;
    this.coursesToRegister$.next(courseToRegister);
  }

  setCourseID(uuid: string, index: number) {
    const courseToRegister = [...this.coursesToRegister$.value];
    courseToRegister[index].uuid = uuid;
    courseToRegister[index].sectionNumber = undefined;
    this.coursesToRegister$.next(courseToRegister);
  }

  submit() {
    const dataToSubmit = this.coursesToRegister$.value.filter(course => {
      return course.uuid !== undefined && course.sectionNumber !== undefined;
    });
    this.coursesToRegister$.next([]);
    return this.apiService
      .post("user/register", dataToSubmit as any)
      .pipe(takeUntil(this.destroy$));
  }

  getCourseByPosition(position: number) {
    console.log(position, "position", this.availableCourses[position]);
    return this.availableCourses[position];
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
