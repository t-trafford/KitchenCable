import { Component, OnInit } from '@angular/core';
import { RecipeService, LocalDataService } from '../_services';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit  {
  recipe_nutrition: any = [];
  params: any = {};
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController,
    private route: ActivatedRoute, private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.params = this.localDataService.getAllParams(this.route.snapshot);
    if (this.params.id) {
      this.get_details();
    } else {
      window.history.back();
    }
  }

  // get_details() {
  //   this.recipe.getRecipesNutrition(this.params.id).subscribe(
  //     res => {
  //         this.recipe_nutrition = res.body || res;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }


  get_details() {
    this.recipe.getRecipesIngredient(this.params.id).subscribe(
      res => {
        this.recipe_nutrition = res.nutrition.nutrients
      },
      err => {
        console.log(err);
      }
    );
  }
}



