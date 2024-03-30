import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHistoryRoutingModule } from './reservation-history-routing.module';
import { ReservationHistoryComponent } from './reservation-history.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ReservationHistoryComponent
  ],
  imports: [
    CommonModule,
    ReservationHistoryRoutingModule,
    AgGridAngular
  ]
})
export class ReservationHistoryModule { }
