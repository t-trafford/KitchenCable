import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


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

    getAllParams(current_state: ActivatedRouteSnapshot) {
        let params = {};
        const rec = (state: ActivatedRouteSnapshot) => {

            params = {...params, ...state.params};

            if (state.parent) {
                rec(state.parent);
            }
            // this.route.snapshot.parent.paramMap.get("id")
        };
        rec(current_state);
        return (params || {});
    }
}