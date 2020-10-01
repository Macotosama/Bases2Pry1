import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InventariosComponent } from './inventarios/inventarios.component'
import { VentasComponent } from './ventas/ventas.component'
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'inventarios', component: InventariosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'estadisticas', component: EstadisticasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
