import { CourseUserStatus } from "./../../core/interfaces/enum";
import { RegistrationService } from "./registration.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-regis",
  templateUrl: "./regis.page.html",
  styleUrls: ["./regis.page.scss"]
})
export class RegisPage implements OnInit {
  disableButton = true;
  constructor(private registerService: RegistrationService) {
    this.registerService.coursesToRegister$.subscribe(courses => {
      const coursesToReduce = courses.filter(course => {
        return course.uuid || course.sectionNumber;
      });
      if (coursesToReduce.length === 0) {
        this.disableButton = true;
      } else {
        const hasError = coursesToReduce.reduce((acc, course) => {
          return (
            acc ||
            course.uuid === undefined ||
            course.sectionNumber === undefined
          );
        }, false);
        this.disableButton = hasError;
      }
    });
  }

  get courseByID$() {
    return this.registerService.availableCoursesByID$;
  }

  get coursesToRegisterMock() {
    // just for iterate inside html template
    // return Array(this.registerService.coursesToRegister$.value.length).fill(0);
    return this.registerService.coursesToRegister$.value;
  }

  addCourse() {
    this.registerService.addCourse();
  }

  submit() {
    this.registerService.submit()
    .subscribe(response => {
      alert(response);
    },
    error =>{
      console.log(error);
      alert(error.statusText);
    });
  }

  ngOnInit() {}

  setCourse(sectionNumber: number, index: number) {
    this.registerService.setSectionNumber(sectionNumber, index);
  }

  setCourseID(courseInfo, index: number) {
    this.registerService.setCourseID(courseInfo && courseInfo.uuid, index);
  }
}
