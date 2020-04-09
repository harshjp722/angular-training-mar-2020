import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banners: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.banners.push({
      bannerId: 1,
      image: '/assets/images/slide01.jpg',
      title: 'Hielo',
      description: 'A free responsive web site template by ',
      link: 'https://templated.co',
      linkText: 'TEMPLATED'
    });

    this.banners.push({
      bannerId: 2,
      image: '/assets/images/slide02.jpg',
      title: 'Magna etiam',
      description: 'Lorem ipsum dolor sit amet nullam feugiat',
      link: '',
      linkText: ''
    });

    this.banners.push({
      bannerId: 3,
      image: '/assets/images/slide03.jpg',
      title: 'Tempus dolor',
      description: 'Sed cursus aliuam veroeros lorem ipsum nullam',
      link: '',
      linkText: ''
    });
  }

}
