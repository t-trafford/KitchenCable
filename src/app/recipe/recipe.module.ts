import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipePage } from './recipe.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RecipePage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../overview/overview.module#OverviewPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../ingredients/ingredients.module#IngredientsPageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../steps/steps.module#StepsPageModule'
      },
      {
        path: 'tab4',
        loadChildren: '../nutrition/nutrition.module#NutritionPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
