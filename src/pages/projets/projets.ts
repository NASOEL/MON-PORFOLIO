import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjetsPage } from '../projets/projets';
/**
 * Generated class for the ProjetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetsPage');
  }
   LISTE() {
    this.navCtrl.push(ProjetsPage);
  }

}
