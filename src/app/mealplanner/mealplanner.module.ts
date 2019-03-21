import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MealplannerPage } from './mealplanner.page';



const routes: Routes = [
  {
    path: 'tabs',
    component: MealplannerPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../daily/daily.module#DailyPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../weekly/weekly.module#WeeklyPageModule'
      },
      
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
  declarations: [MealplannerPage]
})
export class MealplannerPageModule {}
