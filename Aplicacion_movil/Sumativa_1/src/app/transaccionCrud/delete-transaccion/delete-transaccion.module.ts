import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTransaccionPageRoutingModule } from './delete-transaccion-routing.module';

import { DeleteTransaccionPage } from './delete-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTransaccionPageRoutingModule
  ],
  declarations: [DeleteTransaccionPage]
})
export class DeleteTransaccionPageModule {}
