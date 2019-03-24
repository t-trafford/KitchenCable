import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {api} from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../_services';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
model = {email: '', password: ''};
returnUrl: string;


// onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  // }


  constructor(private http: HttpClient, private router: Router,
    private route: ActivatedRoute, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
     // reset login status
     this.authenticationService.logout();

     this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  login() {
    this.authenticationService.login(this.model.email, this.model.password)
            .pipe(first())
            .subscribe(
                data => {
                  console.log('user logged in successfully', data);
                  this.router.navigate([this.returnUrl || '/home']);
                },
                error => {
                  console.log('Error:', error);
                });

     }
}
