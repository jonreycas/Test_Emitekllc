
import { Injectable } from '@angular/core';
import {RequestOptions, Http,  Headers,  Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Nota } from 'app/nota';

@Injectable()
export class NotasService {

  private getNota = "http://localhost:8080/api/nota";
  constructor(private http: Http) { }

  getNotas() {
    let headers = new Headers({ 'Accept': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let url = this.getNota;
    return this.http.get(url,options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  
  postNota(data: Nota){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getNota, data, options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  } 

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
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