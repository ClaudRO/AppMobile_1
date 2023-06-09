import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProveedorPage } from './add-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: AddProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProveedorPageRoutingModule {}
