import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FavoriteService, LocalDataService, AlertMessageService } from '../_services';
import { Favorite} from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  recipes: any = [];
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController) {}

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



 
  
}
