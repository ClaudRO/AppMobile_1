import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTransaccionPage } from './add-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: AddTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTransaccionPageRoutingModule {}
