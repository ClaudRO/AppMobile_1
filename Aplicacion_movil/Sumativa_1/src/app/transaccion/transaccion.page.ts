import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {
  cantidadProducto: number = 0;
  precioProducto: number = 0;
  showSearchField: boolean = false;
  productoejemplo: string = "Pepinos de primera";
  desejemplo: string ="Los pepinos mas grandes y mejor calidad"
  constructor() { }
  guardarDatos() {
    // Aquí puedes agregar la lógica para guardar los datos ingresados
    // por ejemplo, puedes llamar a un servicio o realizar una acción específica
    console.log('Cantidad:', this.cantidadProducto);
    console.log('Precio:', this.precioProducto);
  }

  decrementarCantidad() {
    if (this.cantidadProducto > 0) {
      this.cantidadProducto--;
    }
  }

  incrementarCantidad() {
    this.cantidadProducto++;
  }
  ngOnInit() {
  }

}
