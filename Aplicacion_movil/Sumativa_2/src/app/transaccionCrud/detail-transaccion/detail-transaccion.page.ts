import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itransacciones } from 'src/app/interfaces/itransacciones';
import { StransaccionesService } from 'src/app/services/stransacciones.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail-transaccion',
  templateUrl: './detail-transaccion.page.html',
  styleUrls: ['./detail-transaccion.page.scss'],
})
export class DetailTransaccionPage {
  transaccion: Itransacciones = {
    id: 0,
    idUsuario: 0,
    fecha: new Date(),
    proveedor: '',
    productos: [],
    valorTotal: 0,
  };
  totalTransaccion: number = 0;
  showConfirmation: boolean = false;

  constructor(
    private transaccionServ: StransaccionesService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    this.getTransaccionByID(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split('/', 3);
    let id = parseInt(arr[2]);
    return id;
  }

  async eliminarTransaccion() {
    this.showConfirmation = true;
    const toast = await this.toastController.create({
      message: '¿Estás seguro de que deseas eliminar esta transacción? esta se eliminara permanentemente',
      position: 'middle',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.transaccionServ.eliminartransaccion(this.transaccion).subscribe(() => {
              // Transacción eliminada exitosamente, redirigir al usuario a la página de lista de transacciones
              this.router.navigateByUrl('/historial');
            });
          },
        },
      ],
    });

    await toast.present();
  }

  getTransaccionByID(transaccionID: number) {
    this.transaccionServ.getTransaccionByID(transaccionID).subscribe((resp: any) => {
      this.transaccion = {
        idUsuario: resp[0].idUsuario,
        id: resp[0].id,
        fecha: resp[0].fecha,
        proveedor: resp[0].proveedor,
        productos: resp[0].productos,
        valorTotal: resp[0].valorTotal,
      };
    });
  }
}
