import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcuracoesService } from '../procuracoes.service';
import { Procuracao } from '../Procuracao';
import { Sistema } from '../Sistema';


@Component({
  selector: 'app-app-cadastro-procuracao',
  templateUrl: './app-cadastro-procuracao.component.html',
  styleUrls: ['./app-cadastro-procuracao.component.css']
})
export class AppCadastroProcuracaoComponent implements OnInit {

  sistemasDisponiveis: Sistema[];
  sistemas: any[] = [];
  errorMessage: string;
  resultado: string;
  proc: Procuracao;
  constructor(private service: ProcuracoesService) {
    this.carregarSistemas();
  }

  ngOnInit() {
  }


  carregarSistemas() {
    this.service.getSistemas()
      .subscribe(
      saida => this.sistemasDisponiveis = saida,
      error => this.errorMessage = <any>error);
  }

  cadastrar(form: NgForm) {
    this.proc = {
      niTitular: form.value.niTitular,
      niProcurador: form.value.niProcurador,
      dtInicioVigencia: form.value.dtInicioVigencia,
      dtFimVigencia: form.value.dtFimVigencia,
      sistemas: form.value.sistemas
    }
console.log("entrada do formulario: " + JSON.stringify(this.proc));
console.log("entrada do form.value.dtInicioVigencia: " + form.value.dtInicioVigencia);
    this.service.createProcuracao(this.proc)
      .subscribe(
      saida => this.resultado = JSON.stringify(saida),
      error => this.errorMessage = <any>error);

    console.log("Post Saida: " + this.resultado);
  }




  marcaSistema(id: any, checked: any) {
    if (checked) {
      this.sistemas.push(id.codigo);
    } else {
      this.sistemas.splice(this.sistemas.indexOf(id.codigo), 1);
    }
  }
}
