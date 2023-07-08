import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProveedorPageRoutingModule } from './add-proveedor-routing.module';

import { AddProveedorPage } from './add-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProveedorPageRoutingModule
  ],
  declarations: [AddProveedorPage]
})
export class AddProveedorPageModule {}
