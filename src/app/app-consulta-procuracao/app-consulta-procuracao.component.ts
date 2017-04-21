import { Component, OnInit } from '@angular/core';
import { ProcuracoesService } from '../procuracoes.service';
import { Procuracao } from '../Procuracao';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-app-consulta-procuracao',
  templateUrl: './app-consulta-procuracao.component.html',
  styleUrls: ['./app-consulta-procuracao.component.css']
})
export class AppConsultaProcuracaoComponent implements OnInit {

  procuracoes: Procuracao[];
  errorMessage: string;
  ord: string;
  rev: string;
  constructor(private service: ProcuracoesService) {
    this.carregaProcuracoes();

  }

  ngOnInit() {
  }

  ordenar(coluna: string, event:any) {
    console.log("Class:"+ event.target.className);
    if("glyphicon glyphicon-chevron-down" == event.target.className){
        event.target.className = "glyphicon glyphicon-chevron-up";
       this.rev = '';
    } else{
        event.target.className = "glyphicon glyphicon-chevron-down";

       this.rev = 'reverse';
    }
    this.ord=coluna;

  }
  carregaProcuracoes() {
    this.service.getProcuracoesPorFiltroQuery("")
      .subscribe(
      saida => this.procuracoes = saida,
      error => this.errorMessage = <any>error);
  }


  cancelar(proc: Procuracao) {
    proc.status = "C";
    console.log(JSON.stringify(proc));
    this.service.updateProcuracao(proc)
      .subscribe(
      saida => this.carregaProcuracoes(),
      error => this.errorMessage = <any>error);
  }

}
