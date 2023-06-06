import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  animations: [
    trigger('vibrateAnimation', [
      state('default', style({ transform: 'translateX(0)' })),
      state('vibrating', style({ transform: 'translateX(-2px)' })),
      transition('default <=> vibrating', animate('100ms ease-in-out'))
    ])
  ]
})
export class DetalleProductoPage implements OnInit {
  ejemplofruta: string = "Pepino de primera";
  buttonState: string = 'default';

  constructor() { }

  animateTransition() {
    this.buttonState = 'vibrating';

    // Agrega el enrutador necesario para la navegación aquí

    setTimeout(() => {
      this.buttonState = 'default';
    }, 100);
  }

  ngOnInit() {
  }
}
