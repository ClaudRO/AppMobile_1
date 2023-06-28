import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTransaccionPageRoutingModule } from './update-transaccion-routing.module';

import { UpdateTransaccionPage } from './update-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTransaccionPageRoutingModule
  ],
  declarations: [UpdateTransaccionPage]
})
export class UpdateTransaccionPageModule {}
