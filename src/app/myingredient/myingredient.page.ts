import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../_services/ingredient.service';

@Component({
  selector: 'app-myingredient',
  templateUrl: './myingredient.page.html',
  styleUrls: ['./myingredient.page.scss'],
})
export class MyingredientPage implements OnInit {
  ingredients: any = [];
  constructor(private ingredientService: IngredientService) { }

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

}
