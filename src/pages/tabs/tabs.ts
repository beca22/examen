import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmpleoPage } from '../empleo/empleo';
import { MascotasPage } from '../mascotas/mascotas';
import { JuegosPage } from '../juegos/juegos';
import { RemodelacionPage } from '../remodelacion/remodelacion';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab2 = EmpleoPage;
tab3 = MascotasPage;
tab4 = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
