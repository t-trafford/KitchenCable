import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {api} from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router'; 
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

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {  
  }
  
  login() {
     this.http.post<any>(environment.api+'/auth/login', this.model, httpOptions).pipe(
      tap((newHero: any) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<any>('addHero'))
    ).subscribe((item)=>{
      if(item){
        console.log('user logged in successfully', item);
        this.router.navigate(['/home']);
      }
    }, err => {
      console.log('ERROR', err);
    });

     }
     
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
   
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
   
        // Let the app keep running by returning an empty result.
        return throwError(error);
        // return of(result as T);
      };
    }

    
  
   
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(`HeroService: ${message}`);
    }
}
