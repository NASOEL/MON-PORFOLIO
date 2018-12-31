import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoPage } from './perso';

@NgModule({
  declarations: [
    PersoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoPage),
  ],
})
export class PersoPageModule {}
