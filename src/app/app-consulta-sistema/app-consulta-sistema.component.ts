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

}
