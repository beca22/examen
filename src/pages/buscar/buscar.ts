import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
empleo = [];
items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.empleo = this.navParams.get('empleo');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }
 getItems(ev){
   console.log(ev.target.value);

   this.items = this.empleo.filter(empleo =>{
     return empleo.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
   })
 }

 
}
