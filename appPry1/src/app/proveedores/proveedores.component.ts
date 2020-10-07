import { Component, OnInit } from '@angular/core';
import { Api } from '../servicios/api';
import { Proveedor } from '../servicios/modelos/proveedor';
import { DialogClienteComponent } from '../dialog-cliente/dialog-cliente.component';
import { ClienteMetodo } from '../servicios/modelos/clientesMetodos';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
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
export class ProveedoresComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos : Proveedor;
  public categorias : any;
  public metodos : ClienteMetodo;
  public nombre : string;
  public categoria : string = '';
  public metodo : string = '';

  constructor(public dialog: MatDialog, private api: Api) { }

  ngOnInit(): void {
    this.getproveedor();
    this.getproveedorescategoria();
    this.getclientemetodo();
  }

  getproveedorFill() {
    if (this.nombre == null) {
      this.nombre = null;
    }
    if (this.categoria == '') {
      this.categoria = null;
    }
    if (this.metodo == '') {
      this.metodo = null;
    }
    console.log(this.nombre)
    this.api.getProveedorFiltro(this.nombre, this.categoria, this.metodo).subscribe(Proveedor => {
      this.contenidos = Proveedor;
    });
    this.nombre = null;
    this.categoria = '';
    this.metodo = '';
  }

  getclientemetodo() {
    this.api.getClientesMetodo().subscribe(ClienteMetodo => {
      this.metodos = ClienteMetodo;
    });
  }

  getproveedor() {
    this.api.getProveedores().subscribe(Proveedor => {
      this.contenidos = Proveedor;
    });
  }

    getproveedorescategoria() {
      this.api.getProveedoresCategorias().subscribe(Response => {
        this.categorias = Response;
      });
    }

  dialogClientes(proveedor: Proveedor) {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: '800px', height: '550px', data: proveedor
    })
  }
  
}
