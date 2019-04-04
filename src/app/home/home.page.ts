import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FavoriteService, LocalDataService, AlertMessageService } from '../_services';
import { Favorite} from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoCompleteComponent } from 'ionic4-auto-complete';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  recipes: any = [];
  favorite: Favorite = <Favorite>{};
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController,
    private favoriteService: FavoriteService,
    private router: Router,
    private alertService: AlertMessageService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.recipe.getRandomRecipes().subscribe(
      res => {
        this.recipes = res.recipes;
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
