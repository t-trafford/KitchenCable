import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../_services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorite } from '../_models';
import { RecipeService } from '../_services/recipe.service';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FavoriteService, LocalDataService, AlertMessageService } from '../_services';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage implements OnInit {
  recipes: any = [];
  favorite: Favorite = <Favorite>{};

  constructor(private ingredientService: IngredientService, private router: Router,
    public loadingCtrl: LoadingController,
    private favoriteService: FavoriteService,
    private alertService: AlertMessageService,
    private route: ActivatedRoute) { }

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

  addFavorite(id: string, recipe): void {
    recipe.isFavorite = true;
    this.favorite.recipe = id;
    this.alertService.presentToast('Recipe Added As Favorite!');
    this.favoriteService.post(this.favorite).subscribe(
      res => {
        console.log('Added Successfully!!');
      },
      err => {
        console.log(err);
      }
    );
  }

  viewDeatils(recipe: any) {
    this.router.navigate(['/recipe', recipe.id]);
    console.log(recipe.id);
  }

}
