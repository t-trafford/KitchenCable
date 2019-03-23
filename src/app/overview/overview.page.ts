import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  recipes: any = [];
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    
    this.recipe.getRecipesOverview().subscribe(
      res => {
        this.recipes = res.recipes;
      },
      err => {
        console.log(err);
      }
    );
  }



 
  
}
