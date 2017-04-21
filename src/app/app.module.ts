import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProcuracoesService } from './procuracoes.service';
import { AppListSistema } from './app.listSistema';
import { AppCadastroSistemaComponent } from './app-cadastro-sistema/app-cadastro-sistema.component';
import { AppCadastroProcuracaoComponent } from './app-cadastro-procuracao/app-cadastro-procuracao.component';
import { AppConsultaProcuracaoComponent } from './app-consulta-procuracao/app-consulta-procuracao.component';
import { AppConsultaSistemaComponent } from './app-consulta-sistema/app-consulta-sistema.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

const appRoutes: Routes = [
 
  { path: 'consultaSistema', component: AppConsultaSistemaComponent },
  { path: 'cadastroSistema', component: AppCadastroSistemaComponent },
  { path: 'consultaProcuracao', component: AppConsultaProcuracaoComponent },
  { path: 'cadastroProcuracao', component: AppCadastroProcuracaoComponent },

 { path: 'home', component: AppComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    AppListSistema,
    AppCadastroSistemaComponent,
    AppCadastroProcuracaoComponent,
    AppConsultaProcuracaoComponent,
    AppConsultaSistemaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2OrderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProcuracoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
