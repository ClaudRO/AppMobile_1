import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itransacciones } from 'src/app/interfaces/itransacciones';
import { StransaccionesService } from 'src/app/services/stransacciones.service';

@Component({
  selector: 'app-detail-transaccion',
  templateUrl: './detail-transaccion.page.html',
  styleUrls: ['./detail-transaccion.page.scss'],
})
export class DetailTransaccionPage {
  transaccion : Itransacciones = {
    id:0,
    idUsuario:0,
    fecha: new Date(),
    proveedor: "",
    productos: []
  };
  constructor(
    private transaccionServ:StransaccionesService, private router:Router){ }
  ionViewWillEnter(){
    this.getTransaccionByID(this.getIdFromUrl())
  }
  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id=parseInt(arr[2])
    return id
  }
  getTransaccionByID(transaccionID:Number){
    this.transaccionServ.getTransaccionByID(transaccionID).subscribe(
      (resp:any)=>{
        this.transaccion ={
          idUsuario:resp[0].idUsuario,
          id:resp[0].id,
          fecha:resp[0].fecha,
          proveedor:resp[0].proveedor,
          productos:resp[0].productos
        }
      }
    )

  }
}
