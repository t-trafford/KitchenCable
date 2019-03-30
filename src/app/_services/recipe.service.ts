import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  httpOptions = {
    headers: new HttpHeaders({
      // 'X-RapidAPI-Key': environment.foodAPI.key,
      // 'Content-Type': 'application/json'
      Accept: 'text/html'
    })
  };
  urls = {
    random_recipe_url: '/rapidApi/recipes/random?number=20',
    recipe_overview_url: (id) => `/rapidApi/recipes/${id}/summary`,
    recipe_ingredient_url: (id) => `/rapidApi/recipes/${id}/information?`,
    recipe_steps_url: (id) => `/rapidApi/recipes/${id}/analyzedInstructions?`,
    recipe_nutrition_url: (id) => `/rapidApi/food/products/${id}/nutritionWidget?`,
    recipe_autocompleterecipe_url: '/recipes/autocomplete?query=',
    // recipe_searchrecipe_url: '/recipes/search?query=',
    recipe_autocompleteingredient_url: '/rapidApi/recipes/autocomplete?query=',
    recipe_guessnutrition_url: '/rapidApi/recipes/guessNutrition?ingredients=',
    recipe_substituteingredient_url: '/rapidApi/food/ingredients/substitutes?',

  };
  constructor(private http: HttpClient) {}

  getRandomRecipes(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.random_recipe_url}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesOverview(id: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_overview_url(id)}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesIngredient(id: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_ingredient_url(id)}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesSteps(id: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_steps_url(id)}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getSubstituteIngredient(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_substituteingredient_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesNutritionNew(id: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_ingredient_url(id)}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }


  getAutocompleteRecipe(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_autocompleterecipe_url}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getAutocompleteIngredient(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_autocompleteingredient_url}`
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getGuessNutrition(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.api}/${this.urls.recipe_guessnutrition_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
