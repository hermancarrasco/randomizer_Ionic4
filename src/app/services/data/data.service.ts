import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listas: any = new BehaviorSubject('');

  constructor(private storage: Storage) {
    this.storage.get('listas').then(data => this.listas.next(data));
  }

  agregarLista(formulario) {
    return new Promise((resolve, reject) => {
      this.storage.get('listas').then(data => {
        if (data) {
          const ar = [formulario];
          this.storage.set('listas', [...data, ...ar]);
          this.listas.next([...data, ...ar]);
          resolve('Agregado');
        } else {
          const ar = [formulario];
          this.listas.next(ar);
          this.storage.set('listas', ar);
          resolve('Agregado');
        }
        console.log('data', data);
      })
          .catch(err => reject(err));
    });
  }

getLista() {
  return new Promise((resolve, reject) => {
    this.storage.get('listas').then(data => {
      resolve(data);
    })
        .catch(err => {
          reject(err);
        });
  });
}


}
