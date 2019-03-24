import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { AuthenticationService, UserService, AlertMessageService, LocalDataService } from '../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  model: User = <User>{};

 // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  // }


  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertMessageService,
    private localDataService: LocalDataService

  ) {}

  ngOnInit() {}

  signup() {
    this.authenticationService.register_local(this.model).subscribe(
      item => {
        if (item) {
          console.log('user registered in successfully', item);
          this.router.navigate(['/home']);
          this.alertService.presentToast('User Created Successfully!');

        }
      },
      err => {
        console.log('ERROR', err);
      }
    );
  }
}
