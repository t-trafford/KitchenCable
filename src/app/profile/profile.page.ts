import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  diets = ['Vegetarian', 'Vegan', 'Paleo', 'Primal', 'Pescetarian', 'Ketogenic', 'Whole30', 'Lacto Vegetarian', 'Ovo Vegetarian'];
  intolerances = ['Dairy', 'Egg', 'Gluten', 'Grains', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Tree Nut', 'Wheat', 'Corn'];

  constructor() { }

  ngOnInit() {
  }

}
