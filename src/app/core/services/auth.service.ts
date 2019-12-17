import { IUser } from "./../interfaces/iuser";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserLoginInfo } from "../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public userInfo$ = new BehaviorSubject<UserLoginInfo>(undefined);
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public userData$ = new BehaviorSubject<IUser>(undefined);
  constructor() {}

  setUserInfo(userInfo: UserLoginInfo) {
    localStorage.setItem("token", userInfo.token);
    this.userInfo$.next(userInfo);
    this.isAuthenticated$.next(true);
  }
  getUserInfo(userData: IUser) {
    this.userData$.next(userData);
  }
  logout() {
    localStorage.removeItem("token");
    this.userInfo$.next(undefined);
    this.isAuthenticated$.next(false);
  }
}
