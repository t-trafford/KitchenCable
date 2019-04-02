import { NavParams, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../_services';

@Component({
  selector: 'modal-page',
  templateUrl: "./modal.html",
})
export class ModalPage implements OnInit  {

  // "value" passed in componentProps
  @Input() value: number;
  recipes = [];

  constructor(navParams: NavParams, private recipe: RecipeService,public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit(){
    this.recipe.getRandomRecipes().subscribe(
      res => {
        this.recipes = res.recipes;
      },
      err => {
        console.log(err);
      }
    );
  }

  addToMealPlanner(value){
  // Dismiss the top modal returning some data object
  this.modalController.dismiss({
    'result': value
  })
  }

}