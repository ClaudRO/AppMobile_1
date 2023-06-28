import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTransaccionPageRoutingModule } from './detail-transaccion-routing.module';

import { DetailTransaccionPage } from './detail-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTransaccionPageRoutingModule
  ],
  declarations: [DetailTransaccionPage]
})
export class DetailTransaccionPageModule {}
