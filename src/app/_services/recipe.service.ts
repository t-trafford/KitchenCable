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
      'X-RapidAPI-Key': environment.foodAPI.key,
      'Content-Type': 'application/json'
    })
  };
  urls = {
    random_recipe_url: '/recipes/random?number=20',
    recipe_overview_url: '/recipes/+(req.params.id||4632)+/summary',
    recipe_ingredient_url: '/recipes/"+(req.params.id||4632)+"/information?',
    recipe_steps_url: '/recipes/"+(req.params.id||324694)+"/analyzedInstructions?',
    recipe_nutrition_url: '/food/products/"+(req.params.id||262682)+"/nutritionWidget?',
    recipe_autocompleterecipe_url: '/recipes/autocomplete?query=',
    // recipe_searchrecipe_url: '/recipes/search?query=',
    recipe_autocompleteingredient_url: '/recipes/autocomplete?query=',
    recipe_guessnutrition_url: '/recipes/guessNutrition?ingredients=',

  };
  constructor(private http: HttpClient) {}

  getRandomRecipes(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.random_recipe_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesOverview(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_overview_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesIngredient(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_ingredient_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesSteps(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_steps_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRecipesNutrition(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_nutrition_url}`,
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
        `${environment.foodAPI.url}/${this.urls.recipe_autocompleterecipe_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getAutocompleteIngredient(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_autocompleteingredient_url}`,
        this.httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getGuessNutrition(): Observable<any> {
    return this.http
      .get<any>(
        `${environment.foodAPI.url}/${this.urls.recipe_guessnutrition_url}`,
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
