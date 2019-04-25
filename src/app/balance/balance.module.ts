import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance/balance.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { BalanceItemComponent } from './balance-item/balance-item.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';


@NgModule({
  declarations: [BalanceComponent, BalanceItemComponent, AccountDetailComponent],
  exports: [BalanceComponent],
  imports: [
    CommonModule,
    BalanceRoutingModule,
    CommonComponentsModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    VirtualScrollerModule
  ]
})
export class BalanceModule { }
