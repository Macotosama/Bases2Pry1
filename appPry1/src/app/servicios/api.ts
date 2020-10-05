import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../servicios/modelos/cliente';
import { ClientesCategorias } from '../servicios/modelos/clientesCategorias';
import { ClienteMetodo } from '../servicios/modelos/clientesMetodos';
import { Inventario } from '../servicios/modelos/inventario';
import { Proveedor } from './modelos/proveedor';
import { Ventas } from './modelos/ventas';

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
  private urlInventario: string = 'http://localhost:8000/getAllInventaryInformation';
  private urlProveedores: string = 'http://localhost:8000/getAllSupierInformation';
  private urlVentas: string = 'http://localhost:8000/getAllInvoicesInformation';
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
  getInventario(): Observable<Inventario> {
    return this._http.get<Inventario>(this.urlInventario);
  }
  getProveedores(): Observable<Proveedor> {
    return this._http.get<Proveedor>(this.urlProveedores);
  }
  getVentas(): Observable<Ventas> {
    return this._http.get<Ventas>(this.urlVentas);
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