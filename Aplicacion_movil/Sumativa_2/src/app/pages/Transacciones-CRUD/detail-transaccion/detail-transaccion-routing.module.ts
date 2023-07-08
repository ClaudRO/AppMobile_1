import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTransaccionPage } from './detail-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTransaccionPageRoutingModule {}
