import { ApiService } from 'src/app/core/services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnDestroy {
  username: string;
  password: string;
  destroyed$ = new Subject();
  userNotFound = false;
  wpass = false;
  constructor(private apiService: ApiService, private router: Router) {}
  submit(f) {
    this.userNotFound = false;
    this.wpass = false;
    const data = { username: this.username, password: this.password };

    this.apiService
      .post<any>('auth/login', data)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/stdinfo']);
        },
        error => {
          if (error.status === 404) {
            this.userNotFound = true;
          } else if (error.status === 401) {
            this.wpass = true;
          }
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    this.destroyed$.complete();
  }
}
