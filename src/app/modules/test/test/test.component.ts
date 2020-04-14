import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testNo = 9999999;
  testNo1 = 1.9;
  testNo2 = 0.19;
  currencyTest = 999999;
  dateTest = '2020-04-14T19:20:30+01:00';
  dummyText = 'hElLo';
  collection: string[] = ['a', 'b', 'c', 'd'];
  object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor() { }

  ngOnInit(): void {
  }

}
