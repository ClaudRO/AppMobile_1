import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-transaccion',
  templateUrl: './detalle-transaccion.page.html',
  styleUrls: ['./detalle-transaccion.page.scss'],
})
export class DetalleTransaccionPage implements OnInit {
  detallejemplo : string[]=['4234','05-06-2023-17:00PM','Juan Carlos Zapata','120', 'pepinos de primera','2200c/u','50', 'tunas de primera','3500c/u','Completado','439.000$'];
  constructor() { }

  ngOnInit() {
  }

}
