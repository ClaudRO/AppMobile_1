import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteProveedorPageRoutingModule } from './delete-proveedor-routing.module';

import { DeleteProveedorPage } from './delete-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteProveedorPageRoutingModule
  ],
  declarations: [DeleteProveedorPage]
})
export class DeleteProveedorPageModule {}
