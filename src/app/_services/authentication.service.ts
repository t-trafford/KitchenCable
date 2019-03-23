import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.api}/auth/login`, { email, password })
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                this.set_user(res);
                return res;
            }));
    }

    set_user(res: any){
        if (res && res.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.currentUserSubject.next(res);
        }
    }


    register_local(model: any) {
        return this.http.post<any>(`${environment.api}/auth/register`, model)
            .pipe(map(res => {
                this.set_user(res);
                return res;
            }));
    }

    facebook_auth(access_token: string){
        return this.http.post<any>(`${environment.api}/auth/facebook`, {access_token})
        .pipe(map(res => {
            this.set_user(res);
            return res;
        }));
    }

    google_auth(access_token: string){
        return this.http.post<any>(`${environment.api}/auth/google`, {access_token})
        .pipe(map(res => {
            this.set_user(res);
            return res;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}