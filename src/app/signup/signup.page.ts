import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  model: User = <User>{};

  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  signup() {
    this.authenticationService.register_local(this.model).subscribe(
      item => {
        if (item) {
          console.log('user registered in successfully', item);
          this.router.navigate(['/home']);
        }
      },
      err => {
        console.log('ERROR', err);
      }
    );
  }
}
