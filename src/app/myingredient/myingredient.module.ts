import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AutoCompleteModule } from 'ionic4-auto-complete';

import { MyingredientPage } from './myingredient.page';

const routes: Routes = [
  {
    path: '',
    component: MyingredientPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AutoCompleteModule
  ],
  declarations: [MyingredientPage]
})
export class MyingredientPageModule {}
