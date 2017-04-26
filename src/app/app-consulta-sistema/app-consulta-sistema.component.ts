import { Component, OnInit } from '@angular/core';
import { ProcuracoesService } from '../procuracoes.service';
import { Sistema } from '../Sistema';

@Component({
    selector: 'app-app-consulta-sistema',
    templateUrl: './app-consulta-sistema.component.html',
    styleUrls: ['./app-consulta-sistema.component.css']
})
export class AppConsultaSistemaComponent implements OnInit {

    errorMessage: string = "";
    sistemas: Sistema[];

    

    ngOnInit() {
    }

    constructor(private service: ProcuracoesService) {
        
        this.carregarSistemas();
    }


    carregarSistemas() {
        this.service.getSistemas()
            .subscribe(
            saida => this.sistemas = saida,
            error => this.errorMessage = <any>error);
    }

    apagarSistema(id: number) {
         this.service.deleteSistema(id)
            .subscribe(
            saida => this.carregarSistemas(),
            error => this.errorMessage = <any>error);
    }

filter(sistema: Sistema, termo: string): boolean {    

    var resCodigo = sistema.codigo.indexOf(termo);
    var resDescricao = sistema.descricao.toLowerCase().indexOf(termo.toLowerCase());
    var resSigla = sistema.sigla.toLowerCase().indexOf(termo.toLowerCase());
    let ret:string;
    if(resCodigo<0) {
        ret="N";
    }else{
        ret="S";
    }
    if(resDescricao<0) {
        ret= ret+"N";
    }else{
        ret= ret+"S";
    }
    if(resSigla<0) {
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
