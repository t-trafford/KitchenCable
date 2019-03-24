import { Component, OnInit } from '@angular/core';
import { RecipeService, LocalDataService } from '../_services';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  recipe_ingredients: any = [];
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

  get_details() {
    this.recipe.getRecipesIngredient(this.params.id).subscribe(
      res => {
        this.recipe_ingredients = res.extendedIngredients.map(a=> {
          if(a.image.indexOf('https://') === -1){
            a.image = `https://spoonacular.com/cdn/ingredients_100x100/${a.image}`;
          }
          return a;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}