import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private balance: any;

  constructor(private htmlClient: HttpClient) {}

  getBalance(callback: (data: any ) => void ) {

    if ( this.balance ) {
      callback(this.balance);
      return;
    }

    const url = 'http://localhost:3000/balance';

    this.htmlClient.get(url).subscribe({
      next: data => {
        this.balance = data;
        callback(this.balance);
      },
      error: error => {
        callback(null);
      }
    });
  }

  getDetail(item: number, callback: (data: any) => void){
    const url = 'http://localhost:3000/movements/' + item;

    this.htmlClient.get(url).subscribe({
      next: data => {
        callback(data);
      },
      error: error => {
        callback([]);
      }
    });
  }
}
