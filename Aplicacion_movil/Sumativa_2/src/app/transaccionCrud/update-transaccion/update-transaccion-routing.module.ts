import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTransaccionPage } from './update-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTransaccionPageRoutingModule {}
