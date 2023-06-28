import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisTransaccionPageRoutingModule } from './lis-transaccion-routing.module';

import { LisTransaccionPage } from './lis-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisTransaccionPageRoutingModule
  ],
  declarations: [LisTransaccionPage]
})
export class LisTransaccionPageModule {}
