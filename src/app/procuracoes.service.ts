import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Sistema } from './Sistema';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcuracoesService {
  private url = 'http://localhost:3000/';  // URL to web API

  constructor(private http: Http) { }

getSistemas(): Observable<Sistema[]> {

    return this.http.get(this.url + 'sistema/')
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
      codigo:obj.codigo,
      descricao: obj.descricao,
      tipoPessoa: obj.tipoPessoa
    }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
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
