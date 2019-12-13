import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";

@Component({
  selector: "app-stdinfo",
  templateUrl: "./stdinfo.page.html",
  styleUrls: ["./stdinfo.page.scss"]
})
export class StdinfoPage implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get("user").subscribe(console.log);
  }
}
