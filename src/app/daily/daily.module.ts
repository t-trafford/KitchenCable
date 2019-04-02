import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from '../modal/modal.component';
import { DailyPage } from './daily.page';

const routes: Routes = [
  {
    path: '',
    component: DailyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailyPage, ModalPage],
  entryComponents: [ModalPage]
})
export class DailyPageModule {}
