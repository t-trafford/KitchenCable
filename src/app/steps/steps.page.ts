import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {
  recipes: any = [];
  constructor(private recipe: RecipeService, public loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    
    this.recipe.getRecipesSteps().subscribe(
      res => {
        this.recipes = res.recipes;
      },
      err => {
        console.log(err);
      }
    );
  }
}
