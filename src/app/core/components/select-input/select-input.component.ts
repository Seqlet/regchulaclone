import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-select-input",
  templateUrl: "./select-input.component.html",
  styleUrls: ["./select-input.component.scss"]
})
export class SelectInputComponent implements OnInit {
  @Input() items: string[];
  @Output() select = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
