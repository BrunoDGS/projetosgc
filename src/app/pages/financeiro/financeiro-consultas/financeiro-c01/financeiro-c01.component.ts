
import { Component, OnInit } from '@angular/core';
import { FinanceiroC01Service } from './financeiro-c01.service';

@Component({
  selector: 'app-financeiro-c01',
  templateUrl: './financeiro-c01.component.html',
  styleUrls: ['./financeiro-c01.component.css']
})
export class FinanceiroC01Component implements OnInit {

  exibindoMenufiltro: boolean;

  titulos = [];

  constructor(private financeiroC01Service: FinanceiroC01Service) { }

  ngOnInit(): void {
    this.listarTitulo();
    console.log(this.titulos);
  }


  listarTitulo() {
    // tslint:disable-next-line: deprecation
    this.financeiroC01Service.getListar().subscribe(
      response => this.titulos = response,
      error => console.log(error)
    );
  }

}
