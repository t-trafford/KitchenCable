import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.api}/users`);
    }
    profile() {
        return this.http.get<User>(`${environment.api}/users/profile`);
    }
    get(id: string) {
        return this.http.get<User>(`${environment.api}/users/${id}`);
    }
    put(id: string, model: User) {
        return this.http.put<User>(`${environment.api}/users/${id}`, model);
    }
    update(id: string, model: User) {
        return this.http.patch<User>(`${environment.api}/users/${id}`, model);
    }
}