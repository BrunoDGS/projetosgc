import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FinanceiroHomeComponent } from './financeiro-home/financeiro-home.component';
import { FinanceiroConsultasComponent } from './financeiro-consultas/financeiro-consultas.component';
import { FinanceiroC01Component } from './financeiro-consultas/financeiro-c01/financeiro-c01.component';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    FinanceiroHomeComponent,
    FinanceiroConsultasComponent,
    FinanceiroC01Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    TableModule,
    CalendarModule
  ]
})
export class FinanceiroModule { }
