import { MobileNumberPipe } from './../../shared/pipes/mobile-number.pipe';
import { ExponentialStrengthPipe } from './../../shared/pipes/exponential-strength.pipe';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent,
    ExponentialStrengthPipe,
    MobileNumberPipe
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class TestModule { }
