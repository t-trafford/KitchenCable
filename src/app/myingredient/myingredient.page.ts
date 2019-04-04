import { IngredientService } from '../_services/ingredient.service';
import { CompleteTestService } from '../_services/autocomplete.service';
import { AutoCompleteComponent } from 'ionic4-auto-complete';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { UserService, LocalDataService, AlertMessageService } from '../_services';
import { User, TitleModel } from '../_models';

@Component({
  selector: 'app-myingredient',
  templateUrl: './myingredient.page.html',
  styleUrls: ['./myingredient.page.scss'],
})
export class MyingredientPage implements OnInit {
  ingredients: any = [];
  user: User = <User>{};

  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;
  constructor(private ingredientService: IngredientService, public completeTestService: CompleteTestService, private userService: UserService,
    private alertService: AlertMessageService,
    private localDataService: LocalDataService,) { }

  ngOnInit() {
    this.get_my_ingredient_recipes();
  }

  get_my_ingredient_recipes(){
    this.ingredientService.my_list().subscribe(
      res => {
        this.ingredients = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addIngredients(){
    const ingredient = this.searchbar.getValue();
    if(!this.ingredients.includes(ingredient)){
      this.ingredients.push(ingredient);
      this.searchbar.clearValue();
    }
  }

}
