import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {DataService} from '../../services/data/data.service';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.scss']
})
export class ModalAgregarComponent implements OnInit {

  form: FormGroup;
  items: FormArray;

  constructor(public modalController: ModalController,
              private dataService: DataService,
              private formBuilder: FormBuilder,
              private toast: ToastController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(''),
      items: this.formBuilder.array([ this.CrearItem() ])
    });
  }

  CrearItem(): FormGroup {
    return this.formBuilder.group({
      item: new FormControl('', Validators.required)
    });
  }

  agregarItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.CrearItem());
  }
  agregarLista() {
    console.log(this.form.value);
    const formulario = this.form.value;
    if ( formulario.nombre) {
      this.dataService.agregarLista(formulario)
          .then(data => {
            console.log(data);
            this.presentToast(data);
            this.cerrarModal();
          })
          .catch(err => {
            console.log(err);
            this.presentToast(err)
          });
    } else {
      this.presentToast('Ingresa un nombre');
    }

  }


  cerrarModal() {
    console.log('cerrar modal');
    this.modalController.dismiss();
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
