import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'tabs',
        component: ListPage,
        children: [
          {
            path: 'tab1',
            loadChildren: '../parseingredient/parseingredient.module#ParseingredientPageModule'
          },
          {
            path: 'tab2',
            loadChildren: '../myingredient/myingredient.module#MyingredientPageModule'
          }
          
        ]
      },
      {
        path:'',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }

    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
