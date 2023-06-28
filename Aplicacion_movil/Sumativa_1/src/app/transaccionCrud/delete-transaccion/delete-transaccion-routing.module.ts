import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTransaccionPage } from './delete-transaccion.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTransaccionPageRoutingModule {}
