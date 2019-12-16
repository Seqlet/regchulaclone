import { takeUntil } from 'rxjs/operators';
import { Router } from "@angular/router";
import { faculty } from "./../../core/interfaces/enum";
import { AuthService } from "src/app/core/services/auth.service";
import { IUser } from "./../../core/interfaces/iuser";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { Subject } from 'rxjs';

@Component({
  selector: "app-stdinfo",
  templateUrl: "./stdinfo.page.html",
  styleUrls: ["./stdinfo.page.scss"]
})
export class StdinfoPage implements OnInit ,OnDestroy{
  userData: IUser;
  facultyName = "Engineering";
  destroy$ = new Subject();
  constructor(private authService: AuthService, private router: Router) {}

 

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  ngOnInit() {
    this.authService.userData$
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => (this.userData = data));
  }
  ngOnDestroy(){
    this.destroy$.complete();
  }
}
