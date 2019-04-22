import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateNavBarComponent } from './private-nav-bar/private-nav-bar.component';

@NgModule({
  declarations: [PrivateNavBarComponent],
  exports: [
    PrivateNavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentsModule { }
