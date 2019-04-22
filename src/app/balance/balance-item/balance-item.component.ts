import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-item',
  templateUrl: './balance-item.component.html',
  styleUrls: ['./balance-item.component.less']
})
export class BalanceItemComponent implements OnInit {

  @Input()
  item: Balanceitem;

  constructor() {
    this.item = {id:0, name: 'algo' , amount: 1000 , account: '3289 1209 3489 1209'};
  }

  ngOnInit() {
  }

}


export interface Balanceitem {
  id:number;
  name: string;
  amount: number;
  account: string;
}
