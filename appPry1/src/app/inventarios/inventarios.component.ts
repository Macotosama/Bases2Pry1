import { Component, OnInit } from '@angular/core';
import { DialogInventarioComponent } from '../dialog-inventario/dialog-inventario.component';
import { Api } from '../servicios/api';
import { Inventario } from '../servicios/modelos/inventario';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss'],
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
export class InventariosComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos : Inventario;
  public grupos : any;
  public grupo : string = '';
  public nombre : string;
  public cantidad : number;

  constructor(public dialog: MatDialog,
    private api: Api) { }

  ngOnInit(): void {
    this.getinventario();
    this.getgrupos();
  }

  getclienteFill() {
    if (this.nombre == null) {
      this.nombre ='XD';
    }
    if (this.grupo == '') {
      this.grupo = 'XD';
    }
    if (this.cantidad == null) {
      this.cantidad = 0;
    }
    this.api.getInventarioFiltro(this.nombre, this.grupo, this.cantidad).subscribe(Inventario => {
      this.contenidos = Inventario;
    });
    this.nombre = null;
    this.grupo = '';
    this.cantidad = null;
  }

  getgrupos() {
    this.api.getGrupos().subscribe(Response => {
      this.grupos = Response;
    });
  }

  getinventario() {
    this.api.getInventario().subscribe(Inventario => {
      this.contenidos = Inventario;
    });
  }

  dialogClientes(inventario: Inventario) {
    const dialogRef = this.dialog.open(DialogInventarioComponent, {
      width: '800px', height: '550px',
      data: inventario
    })
  }
}
