import { Component, OnInit } from '@angular/core';
import { ProcuracoesService } from '../procuracoes.service';
import { Procuracao } from '../Procuracao';
import { NgForm } from '@angular/forms';
import {Sistema} from '../Sistema'

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
    //this.carregaProcuracoes();

  }

  ngOnInit() {
  }

  ordenar(coluna: string, event:any) {
    console.log("Class:"+ event.target.className);
    if("glyphicon glyphicon-sort-by-attributes" == event.target.className){
        event.target.className = "glyphicon glyphicon-sort-by-attributes-alt";
       this.rev = '';
    } else{
        event.target.className = "glyphicon glyphicon-sort-by-attributes";

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

buscarProcuracaoPorTitular(niTitular: string){
  this.service.getProcuracoesPorTitular(niTitular)
      .subscribe(
      saida => this.procuracoes = saida,
      error => this.errorMessage = <any>error);

}

buscarProcuracaoPorProcurador(niProcurador: string){
  this.service.getProcuracoesPorProcurador(niProcurador)
      .subscribe(
      saida => this.procuracoes = saida,
      error => this.errorMessage = <any>error);
}

  cancelar(proc: Procuracao) {
    proc.situacao = "C";
    console.log(JSON.stringify(proc));
    this.service.updateProcuracao(proc)
      .subscribe(
      saida => this.carregaProcuracoes(),
      error => this.errorMessage = <any>error);
  }

filter(procuracao: Procuracao, termo: string): boolean {    

    var resTitular = procuracao.niTitular.indexOf(termo);  
    var resProcurador = procuracao.niProcurador.indexOf(termo);
    let ret:string;
    if(resTitular<0) {
        ret="N";
    }else{
        ret="S";
    }
    
    if(resProcurador<0) {
        ret= ret+"N";
    }else{
        ret= ret+"S";
    }
    /*
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("termo: " + termo);
    console.log("resDescricao: " + resDescricao);
    console.log("Descricao: " + sistema.descricao.toLowerCase());
    console.log("Ret: " + ret);
    console.log("resultado: " + ret.indexOf("S"));    
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
    */
    return (ret.indexOf("S")>=0);
  }

}
