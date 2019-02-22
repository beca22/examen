import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { JuegosPage } from '../juegos/juegos';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the MascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {
mascotas = [];
b = BuscarPage;
producto  =JuegosPage;
fav = FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public http: HttpClient ){
     this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
     .subscribe(data => {
       //console.log.JSON.stringtify(data));
  if(data.hasOwnProperty('counter_map')){
    console.log(data.counter_map.all);
  }
  if(data.hasOwnProperty('list_ads')){
    this.mascotas = data.list_ads;
  }
},
error =>{
  console.log(JSON.stringify(error));
});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotasPage');
  }
  buscar(){
    this.navCtrl.push(this.b)
  }
  favoritos(){
    this.navCtrl.push(this.fav);
  }
  verProducto(mascota){
    this.navCtrl.push(this.producto, {mascotas: this.mascotas});
    }
}
