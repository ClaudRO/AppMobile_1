import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SproveedoresService } from 'src/app/services/sproveedores.service';

@Component({
  selector: 'app-detail-proveedor',
  templateUrl: './detail-proveedor.page.html',
  styleUrls: ['./detail-proveedor.page.scss'],
})
export class DetailProveedorPage{
  proveedor = {
    id:0,
    nombre:"nombre del proveedor",
    descripcion:"descripcion del  proveedor"

  }
  constructor(
    private proveedorServ:SproveedoresService, private router:Router){ }
  ionViewWillEnter(){
    this.getProveedorByID(this.getIdFromUrl())
  }
  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id=parseInt(arr[2])
    return id
  }
  getProveedorByID(productoID:Number){
    this.proveedorServ.getProveedorByID(productoID).subscribe(
      (resp:any)=>{
        this.proveedor ={
          id:resp[0].id,
          nombre:resp[0].nombre,
          descripcion:resp[0].descripcion
        }
      }
    )

  }

}
