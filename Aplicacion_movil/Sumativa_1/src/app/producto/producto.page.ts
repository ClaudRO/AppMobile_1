import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  nombreProducto : string ="";
  descripcionProducto : string ="";
  guardarDatos() {
    // Aquí puedes agregar la lógica para guardar los datos ingresados
    // por ejemplo, puedes llamar a un servicio o realizar una acción específica
    console.log('Nombre del producto:', this.nombreProducto);
    console.log('Descripcion del producto:', this.descripcionProducto);
  }
  onFileSelected(event : any) {
    const file = event.target.files[0];
    // Aquí puedes realizar las operaciones que desees con el archivo seleccionado
    console.log(file);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
