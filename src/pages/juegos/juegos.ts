import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {
empleo = []
imgs = []
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritosProvider) {
this.empleo = this.navParams.get('empleos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }
favoritos(empleo){
  this.fav.addFavoritos(empleo);
}
}
