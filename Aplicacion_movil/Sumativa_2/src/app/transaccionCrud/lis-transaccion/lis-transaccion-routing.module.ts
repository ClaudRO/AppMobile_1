import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisTransaccionPage } from './lis-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: LisTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisTransaccionPageRoutingModule {}
