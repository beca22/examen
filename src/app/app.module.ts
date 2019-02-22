import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { JuegosPage } from '../pages/juegos/juegos';
import { EmpleoPage } from '../pages/empleo/empleo';
import { MascotasPage } from '../pages/mascotas/mascotas';
import { RemodelacionPage } from '../pages/remodelacion/remodelacion';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    JuegosPage,
    EmpleoPage,
    MascotasPage,
    RemodelacionPage,
    BuscarPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    JuegosPage,
    EmpleoPage,
    MascotasPage,
    RemodelacionPage,
    BuscarPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
