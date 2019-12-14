import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { UserDoc } from "src/app/core/interfaces/userdoc";

@Component({
  selector: "app-stdinfo",
  templateUrl: "./stdinfo.page.html",
  styleUrls: ["./stdinfo.page.scss"]
})
export class StdinfoPage implements OnInit {
  constructor(private apiService: ApiService) {}
  userDoc: UserDoc = {
    _id: "asddad",
    name: "Lengend Dary",
    username: "9999999999",
    password: "9999999",
    role: "CEO",
    salt: "What is salt",
    faculty: 21,
    major: "ICE",
    studentType: "dunno",
    degree: "bachelor",
    registeredCourses: []
  };
  ngOnInit() {
    this.apiService.get("user").subscribe(console.log);
  }
}
