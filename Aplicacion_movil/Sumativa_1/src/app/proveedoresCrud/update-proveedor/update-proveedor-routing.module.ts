import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProveedorPage } from './update-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProveedorPageRoutingModule {}
