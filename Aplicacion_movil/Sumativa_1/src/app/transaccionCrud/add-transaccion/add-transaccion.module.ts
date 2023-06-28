import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransaccionPageRoutingModule } from './add-transaccion-routing.module';

import { AddTransaccionPage } from './add-transaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransaccionPageRoutingModule
  ],
  declarations: [AddTransaccionPage]
})
export class AddTransaccionPageModule {}
