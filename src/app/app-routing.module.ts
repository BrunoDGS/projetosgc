import { HomeComponent } from './pages/home/home.component';
import { FinanceiroC01Component } from './pages/financeiro/financeiro-consultas/financeiro-c01/financeiro-c01.component';
import { FinanceiroConsultasComponent } from './pages/financeiro/financeiro-consultas/financeiro-consultas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceiroHomeComponent } from './pages/financeiro/financeiro-home/financeiro-home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'financeiro-home', component: FinanceiroHomeComponent },
  { path: 'financeiro-home/financeiro-consultas', component: FinanceiroConsultasComponent },
  { path: 'financeiro-home/financeiro-consultas/c01', component: FinanceiroC01Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
