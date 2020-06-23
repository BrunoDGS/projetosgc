import { FinanceiroModule } from './financeiro/financeiro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FinanceiroModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
