
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.page.html',
  styleUrls: ['./grade.page.scss'],
})
export class GradePage implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("grade").subscribe(console.log);
  }

}
