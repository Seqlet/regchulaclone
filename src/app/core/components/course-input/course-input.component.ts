import { RegistrationService } from "./../../../pages/regis/registration.service";
import { BehaviorSubject, Observable } from "rxjs";
import { ICourseInputDTO } from "./../../interfaces/icourse";
import { Component, OnInit, Input, Output } from "@angular/core";
import { pluck, map, filter, tap } from "rxjs/operators";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-course-input",
  templateUrl: "./course-input.component.html",
  styleUrls: ["./course-input.component.scss"]
})
export class CourseInputComponent implements OnInit {
  @Input() courseIDs: { key: string; value: string }[];
  @Output() newCourse = new EventEmitter<any>();
  @Output() newCourseID = new EventEmitter<any>();
  courseInfo$ = new BehaviorSubject<ICourseInputDTO>(undefined);
  sections$: Observable<any[]>;

  constructor(private registerService: RegistrationService) {
    this.sections$ = this.courseInfo$.pipe(
      map(info => {
        return info !== undefined ? info : { section: [] };
      }),
      pluck("section"),
      map(sections =>
        (sections as any).map(section => ({
          key: section._id,
          value: section.sectionNumber
        }))
      )
    );
  }

  ngOnInit() {}

  selectCourseID(position: number) {
    const courseInfo = this.registerService.getCourseByPosition(position);
    this.courseInfo$.next(courseInfo);
    this.newCourseID.emit(courseInfo);
  }

  selectSection(position: number, sections) {
    const sectionNumber = sections[Number(position)].value;
    this.newCourse.emit(sectionNumber);
  }
}
