import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LocalDataService {
    diets = ['Vegetarian', 'Vegan', 'Paleo', 'Primal', 'Pescetarian', 'Ketogenic', 'Whole30', 'Lacto Vegetarian', 'Ovo Vegetarian'];
    intolerances = ['Dairy', 'Egg', 'Gluten', 'Grains', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Tree Nut', 'Wheat', 'Corn'];
    constructor() { }

    getAllDiets() {
        return this.diets.map(diet => ({'title': diet, 'isChecked': false}));
    }
    getAllIntolerances() {
        return this.intolerances.map(intolerance => ({'title': intolerance, 'isChecked': false}));
    }
}