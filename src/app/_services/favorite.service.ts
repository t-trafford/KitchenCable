import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Favorite } from '../_models/favorite';



@Injectable({ providedIn: 'root' })
export class FavoriteService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Favorite[]>(`${environment.api}/favoriteRecipes`);
    }
    details() {
        return this.http.get<Favorite>(`${environment.api}/favoriteRecipes/details`);
    }
    get(id: string) {
        return this.http.get<Favorite>(`${environment.api}/favoriteRecipes/${id}`);
    }
    post(model: Favorite) {
        return this.http.post<Favorite>(`${environment.api}/favoriteRecipes`, model);
    }
    put(id: string, model: Favorite) {
        return this.http.put<Favorite>(`${environment.api}/favoriteRecipes/${id}`, model);
    }
    update(id: string, model: Favorite) {
        return this.http.patch<Favorite>(`${environment.api}/favoriteRecipes/${id}`, model);
    }
}