import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // login() {
  //   console.log('Performing login');
  //   localStorage.setItem('isUserLoggedIn', 'true');
  //   this.router.navigate(['/about']);
  // }

  navigate(url) {
    console.log(url);
    this.router.navigate([url]);
  }

}
