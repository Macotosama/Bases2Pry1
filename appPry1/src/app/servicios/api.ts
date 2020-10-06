import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../servicios/modelos/cliente';
import { ClientesCategorias } from '../servicios/modelos/clientesCategorias';
import { ClienteMetodo } from '../servicios/modelos/clientesMetodos';
import { Inventario } from '../servicios/modelos/inventario';
import { Proveedor } from './modelos/proveedor';
import { Ventas } from './modelos/ventas';
import { ProveedoresTops } from '../servicios/modelos/proveedorestops';
import { ClientesTop } from '../servicios/modelos/clientestop';
import { TopProductos } from '../servicios/modelos/topproductos';
import { TopCliente } from '../servicios/modelos/topcliente';

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
  private urlProveedoresMas: string = 'http://localhost:8000/getMostExpensiveAmountsSupliers';
  private urlProveedoresMenos: string = 'http://localhost:8000/getLesstExpensiveAmountsSupliers';
  private urlProveedoresPromedio: string = 'http://localhost:8000/getAVGeAmountsSupliers';
  private urlClientesMas: string = 'http://localhost:8000/getMostExpensiveCustomer';
  private urlClientesMenos: string = 'http://localhost:8000/getLessExpensiveCustomer';
  private urlClientesPromedio: string = 'http://localhost:8000/getAVGExpensiveCustomer';
  private urlTopProductos: string = 'http://localhost:8000/getTopProductsFilter';
  private urlTopClientes: string = 'http://localhost:8000/getMaxCustomesInvoices';
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
  getFillProveedoresAltos(nombre: string): Observable<ProveedoresTops> {
    return this._http.get<ProveedoresTops>(`${this.urlProveedoresMas}/${nombre}`, httpOption);
  }
  getFillProveedoresBajos(nombre: string): Observable<ProveedoresTops> {
    return this._http.get<ProveedoresTops>(`${this.urlProveedoresMenos}/${nombre}`, httpOption);
  }
  getFillProveedoresPromedio(nombre: string): Observable<ProveedoresTops> {
    return this._http.get<ProveedoresTops>(`${this.urlProveedoresPromedio}/${nombre}`, httpOption);
  }
  getFillClientesAltos(nombre: string): Observable<ClientesTop> {
    return this._http.get<ClientesTop>(`${this.urlClientesMas}/${nombre}`, httpOption);
  }
  getFillClientesBajos(nombre: string): Observable<ClientesTop> {
    return this._http.get<ClientesTop>(`${this.urlClientesMenos}/${nombre}`, httpOption);
  }
  getFillClientesPromedio(nombre: string): Observable<ClientesTop> {
    return this._http.get<ClientesTop>(`${this.urlClientesPromedio}/${nombre}`, httpOption);
  }
  getTopProductos(fecha1: string, fecha2: string): Observable<TopProductos> {
    return this._http.get<TopProductos>(`${this.urlTopProductos}/${fecha1}/${fecha2}`, httpOption);
  }
  getTopClientes(fecha1: string, fecha2: string): Observable<TopCliente> {
    return this._http.get<TopCliente>(`${this.urlTopClientes}/${fecha1}/${fecha2}`, httpOption);
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