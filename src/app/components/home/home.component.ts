import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banners: any[] = [];
  studentsList: any[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.setData();
    this.getStudents();
    this.tempObservable();
    this.tempPromise();
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

  getStudents() {
    // this.dataService.getStudents().subscribe(res => {
    //   console.log('Response: ', res);
    //   this.studentsList = res;
    // }, err => {
    //   console.log('Error: ', err);
    // });

    this.dataService.getStudents().then(res => {
      console.log('Response: ', res);
      this.studentsList = res;
    });
  }

  tempObservable() {
    const observable = new Observable<number>(observer => {
      observer.next(10);
      observer.next(20);
      observer.next(30);
    });
    observable.pipe(map(v => v = 2 * v));
    const sub = observable.subscribe((value) => {
      console.log('Observale value ', value);
    });
    sub.unsubscribe();
  }

  tempPromise() {
    // initiate execution
    const promise = new Promise<number>((resolve, reject) => {
      resolve(10);
      resolve(20);
      resolve(30);
    });
    promise.then(v => v = 2 * v);
    promise.then((value) => {
      console.log('promise value', value);
    });
  }
}
