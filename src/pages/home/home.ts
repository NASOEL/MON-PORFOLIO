import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjetsPage } from '../projets/projets';
import { ArticlesPage } from '../articles/articles';
import { ContactPage } from '../contact/contact';
import { BlogPage } from '../blog/blog';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  onGoToProjets() {
    this.navCtrl.push(ProjetsPage);
  }
  onGoToArticles() {
    this.navCtrl.push(ArticlesPage);
  }
  onGoToContact() {
    this.navCtrl.push(ContactPage);
  }
  onGoToBlog() {
    this.navCtrl.push(BlogPage);
  }

}
