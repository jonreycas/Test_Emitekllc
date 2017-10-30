
import { Injectable } from '@angular/core';
import {RequestOptions, Http,  Headers,  Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Usuario } from 'app/usuario';

@Injectable()
export class RegisterService {

  private getUsuarios = "http://localhost:8080/api/usuario";
  constructor(private http: Http) { }

  getusuarios() {
    let headers = new Headers({ 'Accept': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let url = this.getUsuarios;
    return this.http.get(url,options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  postUsuario2(data: Object) {
    let headers = new Headers({ 'Accept': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    if (data) {
      let url = `${this.getUsuarios}`;
      return this.http.post(url,data,options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
  }

  postUsuario(data: Usuario){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getUsuarios, data, options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  } 

  createArticle(data: Usuario):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      console.log(this.http.post(this.getUsuarios, data, options));
      return this.http.post(this.getUsuarios, data)
             .map(success => success.status)
             .catch(this.handleError);
  }



  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
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