import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DialogProveedorComponent } from './dialog-proveedor/dialog-proveedor.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { DialogInventarioComponent } from './dialog-inventario/dialog-inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { DialogVentasComponent } from './dialog-ventas/dialog-ventas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    DialogClienteComponent,
    ProveedoresComponent,
    DialogProveedorComponent,
    InventariosComponent,
    DialogInventarioComponent,
    VentasComponent,
    DialogVentasComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    GoogleMapsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
