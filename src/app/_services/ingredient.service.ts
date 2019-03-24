import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../_models';



@Injectable({ providedIn: 'root' })
export class IngredientService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Ingredient[]>(`${environment.api}/ingredient`);
    }
    recipes() {
        return this.http.get<any>(`${environment.api}/ingredient/recipes`);
    }
    my_list() {
        return this.http.get<Ingredient>(`${environment.api}/ingredient/bucket`);
    }
    get(id: string) {
        return this.http.get<Ingredient>(`${environment.api}/ingredient/${id}`);
    }
    post(model: Ingredient) {
        return this.http.post<Ingredient>(`${environment.api}/ingredient`, model);
    }
    parse(model: any) {
        return this.http.post<any>(`${environment.api}/ingredient/parse`, model);
    }
    put(id: string, model: Ingredient) {
        return this.http.put<Ingredient>(`${environment.api}/ingredient/${id}`, model);
    }
    update(id: string, model: Ingredient) {
        return this.http.patch<Ingredient>(`${environment.api}/ingredient/${id}`, model);
    }
}