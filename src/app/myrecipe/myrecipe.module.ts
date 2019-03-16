import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyrecipePage } from './myrecipe.page';

const routes: Routes = [
  
  {
    path: 'tabs',
    component: MyrecipePage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../myrecipes/myrecipes.module#MyrecipesPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../favorite/favorite.module#FavoritePageModule'
      }
   ]
  },
  {
    path:'',
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
  declarations: [MyrecipePage]
})
export class MyrecipePageModule {}
