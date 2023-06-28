import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SproductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-detail-producto',
  templateUrl: './detail-producto.page.html',
  styleUrls: ['./detail-producto.page.scss'],
})
export class DetailProductoPage{
  producto = {
    id:0,
    nombre:"producto",
    descripcion:"descripcion del  producto"
  }
  constructor(
    private productoServ:SproductosService, private router:Router){ }
  ionViewWillEnter(){
    this.getProductoByID(this.getIdFromUrl())
  }
  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id=parseInt(arr[2])
    return id
  }
  getProductoByID(productoID:Number){
    this.productoServ.getProductoByID(productoID).subscribe(
      (resp:any)=>{
        this.producto ={
          id:resp[0].id,
          nombre:resp[0].nombre,
          descripcion:resp[0].descripcion
        }
      }
    )

  }
}
