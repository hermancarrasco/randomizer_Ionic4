import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import { ModalAgregarComponent } from './components/modal-agregar/modal-agregar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalListarComponent } from './components/modal-listar/modal-listar.component';

@NgModule({
  declarations: [AppComponent, ModalAgregarComponent, ModalListarComponent],
  entryComponents: [ ModalAgregarComponent, ModalListarComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
