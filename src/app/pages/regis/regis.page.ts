import { CourseUserStatus } from "./../../core/interfaces/enum";
import { RegistrationService } from "./registration.service";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-regis",
  templateUrl: "./regis.page.html",
  styleUrls: ["./regis.page.scss"]
})
export class RegisPage implements OnInit {
  disableButton = true;

  constructor(
    private registerService: RegistrationService,
    private toastController: ToastController
  ) {
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
    return this.registerService.coursesToRegister$.value;
  }

  addCourse() {
    this.registerService.addCourse();
  }

  submit() {
    this.registerService.submit().subscribe(
      response => {
        const failedCourses = (response as any).failed;
        for (const course of failedCourses) {
          this.presentToast(course.courseNumber + ":" + course.message);
        }
      },
      async error => {
        const failedCourses = error.error.failed;
        for (const course of failedCourses) {
          this.presentToast(course.courseNumber + ":" + course.message);
        }
      }
    );
  }

  presentToast(message: string) {
    this.toastController
      .create({
        message,
        duration: 2000,
        animated: true,
        showCloseButton: true,
        closeButtonText: "X"
      })
      .then(mobj => {
        mobj.present();
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
