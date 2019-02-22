import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  favoritos = [];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
  remove(empleo){
    let index = this.favoritos.findIndex(item =>{
      return item.ad.subject = empleo.ad.subject && 
      item.ad.user.account.me == empleo.ad.usser.name
    })
    if(index >-1){
      this.favoritos.splice(index,1);

      const toast = this.toastCtrl.create({
        message: 'Eliminada de favoritos',
        duration : 3000
      });
    }
  }
    existe(empleo){
      return this.favoritos.some(item =>{
        return item.ad.subject.toLowerCase().includes(empleo.ad.subject.toLowerCase());
              
      });
    }

addFavoritos(empleo){
  this.favoritos.push(empleo);

  const toast = this.toastCtrl.create({
    message: 'Agregado a favoritos',
    duration: 3000
  });

  toast.present();
  }
    getFavoritos(){
      return this.favoritos;
    }
}

