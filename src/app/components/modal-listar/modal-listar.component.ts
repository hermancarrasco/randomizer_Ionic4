import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-modal-listar',
  templateUrl: './modal-listar.component.html',
  styleUrls: ['./modal-listar.component.scss']
})
export class ModalListarComponent implements OnInit {

  params;
  datos: any[];
  valor;

  constructor(private modaCtrl: ModalController, navParams: NavParams, private dataService: DataService) {
    this.params = navParams.get('value');
  }

  ngOnInit() {
    this.dataService.getLista()
        .then(data => {
          console.log(data[this.params]);
          this.datos = data[this.params];
        })
        .catch(err => {
          console.log(err);
        });
  }

  randomizar() {
    const numero = Math.round(Math.random() * (this.datos['items'].length - 1));
    const items = this.datos['items'];
    this.valor = items[numero].item;
    console.log(this.valor);
  }

  cerrarModal() {
    this.modaCtrl.dismiss();
  }

}
