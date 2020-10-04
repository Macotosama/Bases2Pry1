import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../servicios/modelos/cliente';
import { ClientesCategorias } from '../servicios/modelos/clientesCategorias';
import { ClienteMetodo } from '../servicios/modelos/clientesMetodos';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class Api {
  private url: string = 'http://localhost:8000/AllClienteInformation';
  private urlClienteCantegoria: string = 'http://localhost:8000/getAllCategoryNames';
  private urlClienteMetodo: string = 'http://localhost:8000/getAllCategoriesDeliveryMethodNames';
  private urlAdd: string = 'http://localhost:4000/api/add';
  private urlFind: string = 'http://localhost:4000/api/find';
  constructor(
    private _http: HttpClient
  ){}

  getClientes(): Observable<Cliente> {
    return this._http.get<Cliente>(this.url);
  }
  getClientesCategorias(): Observable<ClientesCategorias> {
    return this._http.get<ClientesCategorias>(this.urlClienteCantegoria);
  }
  getClientesMetodo(): Observable<ClienteMetodo> {
    return this._http.get<ClienteMetodo>(this.urlClienteMetodo);
  }
/*
  add(cliente: Telefono):Observable<Response>{
    return this._http.post<Response>(this.urlAdd, cliente, httpOption);
  }

  delete(id: string):Observable<Response>{
    return this._http.delete<Response>(${this.urlDelet}/${id});
  }

  edit(cliente: Telefono,id: string):Observable<Response>{
    return this._http.put<Response>(${this.urlEdit}/${id}, cliente, httpOption);
  }

  find(nombre: string, apellido1: string, apellido2: string) {
    console.log(${this.urlFind}/${nombre}/${apellido1}/${apellido2}/);
    return this._http.get<Response>(${this.urlFind}/${nombre}/${apellido1}/${apellido2}/, httpOption);
  }*/
}