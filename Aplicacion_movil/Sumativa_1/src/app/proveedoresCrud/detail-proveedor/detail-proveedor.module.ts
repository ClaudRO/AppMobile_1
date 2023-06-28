import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProveedorPageRoutingModule } from './detail-proveedor-routing.module';

import { DetailProveedorPage } from './detail-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProveedorPageRoutingModule
  ],
  declarations: [DetailProveedorPage]
})
export class DetailProveedorPageModule {}
