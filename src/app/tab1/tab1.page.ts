import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numero = 0;
  intervalo;
  estado = false;
  par: boolean;
  minimo: number;
  maximo: number;

  constructor(private toast: ToastController) {}

random() {
  let cont = 0;
   if (this.minimo < this.maximo) {
       this.intervalo = setInterval(() => {
           cont ++;
           if (cont % 2) {
               this.par = true;
           } else {
               this.par = false;
           }
           if (cont <= 5) {
               this.numero = Math.round(Math.random() * (this.maximo - this.minimo) + this.minimo);
           } else {
               console.log('termino');
               this.estado = true;
               clearInterval(this.intervalo);
           }
       }, 300);
   } else {
        !this.minimo && !this.maximo ? this.presentToast('Ingresa los Valores') : this.presentToast('El campo minimo debe ser menor que maximo');
   }
  }

    async presentToast(msg) {
        const toast = await this.toast.create({
            message: msg,
            showCloseButton: true,
            duration: 3000
        });
        toast.present();
    }

}
