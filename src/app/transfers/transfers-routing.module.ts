import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

const routes: Routes = [
  {
    path: 'transfers/form',
    component: TransferFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
