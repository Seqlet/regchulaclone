import { Router } from "@angular/router";
import { faculty } from "./../../core/interfaces/enum";
import { AuthService } from "src/app/core/services/auth.service";
import { IUser } from "./../../core/interfaces/iuser";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "app-stdinfo",
  templateUrl: "./stdinfo.page.html",
  styleUrls: ["./stdinfo.page.scss"]
})
export class StdinfoPage {
  userData$: Observable<IUser>;
  facultyName = "Engineering";
  constructor (private router: Router, private authService: AuthService) {
    this.userData$ = this.authService.userInfo$
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
