import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserLoginInfo } from "../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public userInfo$ = new BehaviorSubject<UserLoginInfo>(undefined);
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setUserInfo(userInfo: UserLoginInfo) {
    console.log("setUserInfo");
    localStorage.setItem("token", userInfo.token);
    this.userInfo$.next(userInfo);
    this.isAuthenticated$.next(true);
  }
  
  
}
