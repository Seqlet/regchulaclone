import { Component, OnInit } from "@angular/core";
import { WithdrawService } from "./withdraw.service";
import { ICourseInputDTO } from "src/app/core/interfaces/icourse";
import { Observable } from "rxjs";

@Component({
  selector: "app-withdraw",
  templateUrl: "./withdraw.page.html",
  styleUrls: ["./withdraw.page.scss"]
})
export class WithdrawPage implements OnInit {
  coursesAvailable$: Observable<ICourseInputDTO[]>;
  disable = true;
  constructor(private withdrawService: WithdrawService) {
    this.coursesAvailable$ = this.withdrawService.coursesAvailable$;
    this.withdrawService.coursesToWithdraw$.subscribe(courses => {
      this.disable = courses.length === 0;
    })
  }

  handleSelect(event, course: ICourseInputDTO) {
    const isSelect = event.currentTarget.checked;
    if (isSelect) {
      this.addCourse(course);
    } else {
      this.removeCourse(course);
    }
  }

  private addCourse(course: ICourseInputDTO) {
    this.withdrawService.addCourse(course);
  }

  private removeCourse(course: ICourseInputDTO) {
    this.withdrawService.removeCourse(course);
  }

  withdraw() {
    this.withdrawService.withdraw();
  }

  ngOnInit() {}
}
