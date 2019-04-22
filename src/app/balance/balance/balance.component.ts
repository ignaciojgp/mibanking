import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { BalanceService } from 'src/app/services/balance.service';
import { Balanceitem } from '../balance-item/balance-item.component';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.less']
})
export class BalanceComponent implements OnInit {

  loading = false;
  accounts: { accounts: Array<Balanceitem>, credits: Array<Balanceitem>, investments: Array<Balanceitem> };

  constructor(private balanceService: BalanceService) { }

  ngOnInit() {

   this.reload();

  }

  reload() {
    this.loading = true;
    this.balanceService.getBalance(data => {
      this.accounts = data.data;
      this.loading = false;
    });
  }

}
