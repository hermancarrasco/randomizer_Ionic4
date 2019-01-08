import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalAgregarComponent} from '../components/modal-agregar/modal-agregar.component';
import {DataService} from '../services/data/data.service';
import {ModalListarComponent} from '../components/modal-listar/modal-listar.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  itemsVar: any[];

  constructor(public modalController: ModalController, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.listas.subscribe((data) => {
      console.log(data);
      if (data) {
      this.itemsVar = data;
      }
    });
    /*this.dataService.getLista().then((data: any) => {
      this.items = data;
      console.log('listas');
      console.log(data);
    })
        .catch(err => console.log(err));*/
  }

  async presentModalAgregar() {
    const modal = await this.modalController.create({
      component: ModalAgregarComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModalLista(index) {
    const modal = await this.modalController.create({
      component: ModalListarComponent,
      componentProps: { value: index }
    });
    return await modal.present();
  }


}
