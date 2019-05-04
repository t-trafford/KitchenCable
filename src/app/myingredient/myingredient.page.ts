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
  ingredientText: string;

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

  addIngredient(){
    if (this.searchbar) {
      const ing = this.searchbar.getValue();
      if(!this.ingredients.includes(ing)){
        this.ingredients.push(ing);
        this.searchbar.clearValue();
      } 
    }


    if (this.ingredientText) {
      this.ingredientService.parse({ingredientText: this.ingredientText}).subscribe(
        res => {
          console.log(res);
          delete this.ingredientText;
          this.get_my_ingredient_recipes();
        },
        err => {
          console.log(err);
          this.alertService.presentToast('Not able to add ingredients!', 'danger');
        }
      );
    } else {
      this.alertService.presentToast('No ingredients to add! Please add/parse valid ingredient list file.', 'danger');
    }
  }

  itemSelected($event){
    console.log($event);
    if($event && $event.title){
      this.ingredientText = $event.title;
    }
  }

}
