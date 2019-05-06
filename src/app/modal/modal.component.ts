import { NavParams, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../_services';

@Component({
  selector: 'modal-page',
  templateUrl: "./modal.html",
  styleUrls: ['modal.page.scss']
})
export class ModalPage implements OnInit  {

  // "value" passed in componentProps
  @Input() value: number;
  recipes = [];
  textSearch: string;

  constructor(navParams: NavParams, private recipe: RecipeService,public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit(){
    this.getRecipies();
  }

  getRecipies(){
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
            rec.image = rec.image.indexOf('http') === -1 ? `https://spoonacular.com/recipeImages/${rec.image}`: rec.image;
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

  addToMealPlanner(value){
  // Dismiss the top modal returning some data object
  this.modalController.dismiss({
    'result': value
  })
  }

}