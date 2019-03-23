import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  recipes: any = [];
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    
    this.recipe.getRecipesIngredient().subscribe(
      res => {
        this.recipes = res.recipes;
      },
      err => {
        console.log(err);
      }
    );
  }
}