import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Sistema } from './Sistema';
import { Procuracao } from './Procuracao';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcuracoesService {
  private url = 'http://localhost:3000/';  // URL to web API
  private serviceUrl = 'http://localhost:8082/procRest/sistemas/'
  constructor(private http: Http) { }

  // ************************* Sistemas****************************************************
  getSistemas(): Observable<Sistema[]> {
    console.log("getSistemas: " + this.serviceUrl+ "sistemas/");
    return this.http.get(this.serviceUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createSistema(obj: Sistema): Observable<Sistema> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(obj);
    console.log("Dado de entrada: " + obj);
    return this.http.post(this.url + "sistema/", {
      sigla: obj.sigla,
      codigo: obj.codigo,
      descricao: obj.descricao,
      tipoPessoa: obj.tipoPessoa
    }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteSistema(id: number): Observable<string> {
    console.log("apagando sistema de id: " + id);
    return this.http.delete(this.url + 'sistema/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // ******************************Procuração ********************************
  createProcuracao(obj: Procuracao): Observable<Procuracao> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(obj);
    console.log("Dado de entrada: " + body);
    return this.http.post(this.url + "procuracao/", {
      niTitular: obj.niTitular,
      niProcurador: obj.niProcurador,
      dataInicioVigencia: obj.dataInicioVigencia,
      dataFimVigencia: obj.dataFimVigencia,
      sistemas: obj.sistemas
    }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

updateProcuracao(obj: Procuracao): Observable<Procuracao> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(obj);
    console.log("Dado de entrada: " + body);
    return this.http.put(this.url + "procuracao/"+obj.id, {
      id: obj.id,
      niTitular: obj.niTitular,
      niProcurador: obj.niProcurador,
      dataInicioVigencia: obj.dataInicioVigencia,
      dataFimVigencia: obj.dataFimVigencia,
      sistemas: obj.sistemas,
      situacao: obj.situacao
    }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProcuracoesPorTitular(niTitular:string): Observable<Procuracao[]> {
      console.log("Chamada: " + this.url + 'procuracoes/' + niTitular);
    return this.http.get('http://localhost:8082/procRest/procuracoes/niTitular=' + niTitular)
      .map(this.extractData)
      .catch(this.handleError);
  }

/*
 S3 SUPER3
    -------- SOURCE FIELD(S) -------
    NR-CPF-CNPJ-PROCURADOR(1-14)
    DT-INICIO-VIGENCIA(1-8)
    HR-INICIO-VIGENCIA(1-6)
*/ 
  getProcuracoesPorProcurador(niProcurador:string): Observable<Procuracao[]> {

   // return this.http.get(this.url + 'procuracao/?niProcurador=' + niProcurador)
   return this.http.get('http://localhost:8082/procRest/procuracoes/niProcurador=' + niProcurador) //19007809334
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProcuracoesPorFiltroQuery(query:string): Observable<Procuracao[]> {

    return this.http.get(this.url + 'procuracao/'+query)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // ******************************* Infra ************************************
  private extractData(res: Response) {
    let body = res.json();
    console.log("extractData: " + JSON.stringify(body));
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
