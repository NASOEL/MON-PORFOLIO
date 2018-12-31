import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoProjetPage } from './info-projet';

@NgModule({
  declarations: [
    InfoProjetPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoProjetPage),
  ],
})
export class InfoProjetPageModule {}
