import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcuracoesService } from '../procuracoes.service';

import { Sistema } from '../Sistema';

@Component({
  selector: 'app-app-cadastro-sistema',
  templateUrl: './app-cadastro-sistema.component.html',
  styleUrls: ['./app-cadastro-sistema.component.css']
})
export class AppCadastroSistemaComponent implements OnInit {

  formSistema: Sistema;
  resultado: string;
  errorMessage: string;
  pessoa: any = [
    { "value": "1", "text": "Pessoa Fisica" },
    { "value": "2", "text": "Pessoa Juridica" },
    { "value": "3", "text": "Fisica e Juridica" }
  ]
  constructor(private service: ProcuracoesService) { }

  ngOnInit() {
  }


  cadastrar(form: NgForm) {
    this.formSistema = {
      sigla: form.value.sigla,
      descricao: form.value.descricao,
      codigo: form.value.codigo,
      tipoPessoa: form.value.tipoPessoa
    }

    
    console.log("--> " + JSON.stringify(this.formSistema));
     this.service.createSistema(this.formSistema)
      .subscribe(
      saida => this.resultado = JSON.stringify(saida),
      error => this.errorMessage = <any>error);
      
    console.log("Post Saida: " + this.resultado);
  }
}
