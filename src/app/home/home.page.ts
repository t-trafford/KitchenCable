import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FavoriteService, LocalDataService, AlertMessageService } from '../_services';
import { Favorite} from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoCompleteComponent } from 'ionic4-auto-complete';
import { CompleteTestService2 } from '../_services/autocompleterecipe.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  recipes: any = [];
  favorite: Favorite = <Favorite>{};
  textSearch: string;
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController,
    private favoriteService: FavoriteService,
    private router: Router,
    private alertService: AlertMessageService,
    private route: ActivatedRoute,
    public completeTestService2: CompleteTestService2) {
    }

  ngOnInit(): void {
    this.getRecipies();
  }

  getRecipies(): void {
    this.recipe.getRandomRecipes().subscribe(
      res => {
        this.recipes = res.recipes;
      },
      err => {
        console.log(err);
      }
    );
  }

  search(){
    if (this.textSearch) {
      this.recipe.search(this.textSearch).subscribe(
        res => {
          // debugger;
          this.recipes = res.results.map(rec=> {
            rec.image = rec.image.indexOf('http') === -1 ?`https://spoonacular.com/recipeImages/${rec.image}`: rec.image;
            return rec;
          });
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.getRecipies();
    }
  }

  addFavorite(id: string, recipe): void {
    recipe.isFavorite = true;
    this.favorite.recipe = id;
    this.favoriteService.post(this.favorite).subscribe(
      res => {
        console.log('Added Successfully!!');
        this.alertService.presentToast('Recipe Added As Favorite!');
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
