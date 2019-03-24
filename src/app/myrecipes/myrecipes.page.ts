import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../_services/ingredient.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage implements OnInit {
  recipes: any = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.get_my_ingredient_recipes();
  }

  get_my_ingredient_recipes(){
    this.ingredientService.recipes().subscribe(
      res => {
        this.recipes = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
