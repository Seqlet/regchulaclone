import { IUser } from "./../../core/interfaces/iuser";
import { ApiService } from "src/app/core/services/api.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnDestroy, OnInit {
  username: string;
  password: string;
  destroyed$ = new Subject();
  userNotFound = false;
  wpass = false;
  userData: IUser;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}
  submit(f) {
    this.userNotFound = false;
    this.wpass = false;
    const data = { username: this.username, password: this.password };
    this.apiService
      .post<any>("auth/login", data)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        response => {
          this.authService.getUserInfo(response);
          this.authService.setUserInfo(response);
          this.password="";
          this.router.navigate(["/stdinfo"]);
        },
        error => {
          if (error.status === 404) {
            this.userNotFound = true;
          } else if (error.status === 401) {
            this.wpass = true;
          }
        }
      );
  }

  ngOnInit() {
    this.username = '6180968279';
    this.password = 'aGDwSB5W0Ef5ojB';
    this.submit({});
  }

  ngOnDestroy() {
    this.destroyed$.complete();
  }
}
