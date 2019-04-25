import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { MzInputModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize'

@NgModule({
  declarations: [ TransferFormComponent ],
  exports: [ TransferFormComponent ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    CommonComponentsModule,
    MzInputModule,
    MzSelectModule
  ]
})
export class TransfersModule { }
