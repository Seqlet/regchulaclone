import { IUser } from "./../interfaces/iuser";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { UserLoginInfo } from "../interfaces/user";
import {
  filter,
  switchMap,
  map,
  pairwise,
  takeUntil,
  tap
} from "rxjs/operators";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {
  userInfo$ = new BehaviorSubject<IUser>(undefined);
  token$ = new BehaviorSubject<string>(
    localStorage.getItem("token") === "undefined"
      ? undefined
      : localStorage.getItem("token")
  );
  destroy$ = new Subject();
  isAuthenticated$ = this.token$.pipe(
    takeUntil(this.destroy$),
    map(token => token !== undefined)
  );
  isAuthenticated = false;

  constructor(private apiService: ApiService) {
    this.token$
      .pipe(
        filter(token => {
          return token !== undefined && !this.userInfo$.value;
        }),
        takeUntil(this.destroy$),
        switchMap(_ => this.apiService.get<IUser>("user"))
      )
      .subscribe(
        userInfo => {
          this.userInfo$.next(userInfo);
        },
        _ => {
          this.userInfo$.next(undefined);
          this.token$.next(undefined);
        }
      );
    this.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  setUserInfo(userInfo: UserLoginInfo) {
    localStorage.setItem("token", userInfo.token);
    this.userInfo$.next(userInfo.user);
    this.token$.next(userInfo.token);
  }

  logout() {
    localStorage.removeItem("token");
    this.token$.next(undefined);
    this.userInfo$.next(undefined);
  }

  ngOnDestroy() {
    this.userInfo$.complete();
    this.token$.complete();
    this.destroy$.complete();
  }
}
