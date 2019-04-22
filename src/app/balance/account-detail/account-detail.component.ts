import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'src/app/services/balance.service';
import { Balanceitem } from '../balance-item/balance-item.component';
import { RouterState, Router, ActivatedRoute } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  account: Balanceitem;
  movs: Array<MovementData>;


  constructor(private balanceservice: BalanceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.balanceservice.getBalance(data => {
      const _data = data;
      

      this.route.params.subscribe(params => {
        console.log(_data);
        const item = params.item;
        const type = params.type;

        console.log('item:' + item + ' type:' + type );

        this.account = _data.data.accounts[item];


        this.loadMovs();

      });

    });


  }

  loadMovs(){
    this.balanceservice.getDetail(this.account.id, data => {
      this.movs = data.movs;
    });
  }

}


export interface MovementData {

  date: string;
  reference: string;
  amount: number;

}