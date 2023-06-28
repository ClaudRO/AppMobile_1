import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProveedorPageRoutingModule } from './update-proveedor-routing.module';

import { UpdateProveedorPage } from './update-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateProveedorPageRoutingModule
  ],
  declarations: [UpdateProveedorPage]
})
export class UpdateProveedorPageModule {}
