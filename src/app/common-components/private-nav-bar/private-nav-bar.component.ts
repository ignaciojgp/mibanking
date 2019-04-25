import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.less']
})
export class PrivateNavBarComponent implements OnInit {

  menuvisible = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route: string){
    console.log(route);
    this.router.navigateByUrl(route);

  }

}
