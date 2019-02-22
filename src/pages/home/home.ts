import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';
import { JuegosPage } from '../juegos/juegos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
juegos = [];
imgs = [];
bus = BuscarPage;
fav = FavoritosPage;
producto = JuegosPage;
  constructor(public navCtrl: NavController,
    public http: HttpClient) {
this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
.subscribe(data => {
  //console.log.JSON.stringtify(data));
  if(data.hasOwnProperty('counter_map')){
    console.log(data.counter_map.all);
  }
  if(data.hasOwnProperty('list_ads')){
    this.juegos = data.list_ads;
  }
},
error =>{
  console.log(JSON.stringify(error));
});

}
buscar(){
  this.navCtrl.push(this.bus)
}
favoritos(){
  this.navCtrl.push(this.fav);
}
verProducto(juego){
this.navCtrl.push(this.producto, {juegos: this.juegos});
}
}
