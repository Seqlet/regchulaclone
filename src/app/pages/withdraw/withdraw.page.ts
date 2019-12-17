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
  constructor(private withdrawService: WithdrawService) {
    this.coursesAvailable$ = this.withdrawService.coursesAvailable$;
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
