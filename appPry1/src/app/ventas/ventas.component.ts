import { Component, OnInit } from '@angular/core';
import { DialogVentasComponent } from '../dialog-ventas/dialog-ventas.component';
import { Api } from '../servicios/api';
import { Ventas } from '../servicios/modelos/ventas';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        opacity:0
      })),
      transition(':enter', [
        animate(3000, style({
          opacity:1
        }))
      ])
    ]),
    trigger('enterState2', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(2000, style({
          transform: 'translateXS(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class VentasComponent implements OnInit {
  public columnas = ['factura', 'fecha', 'cliente', 'metodo', 'monto'];
  public contenidos : Ventas;
  public venta: number;
  public cliente: string;
  public metodo: string;

  constructor(public dialog: MatDialog,
    private api: Api) { }

  ngOnInit(): void {
    this.getventas();
  }

  getventasFill() {
    if (this.venta == null) {
      this.venta = 0;
    }
    if (this.cliente == null) {
      this.cliente = 'XD';
    }
    if (this.metodo == null) {
      this.metodo = 'XD';
    }
    console.log(this.cliente)
    this.api.getVentaFiltro(this.venta, this.cliente, this.metodo).subscribe(Ventas => {
      this.contenidos = Ventas;
    });
    this.venta = null;
    this.cliente = null;
    this.metodo = null;
  }

  getventas() {
    this.api.getVentas().subscribe(Ventas => {
      this.contenidos = Ventas;
    });
  }

  dialogClientes(ventas: Ventas) {
    const dialogRef = this.dialog.open(DialogVentasComponent, {
      width: '800px', height: '550px', data: ventas
    })
  }

}
