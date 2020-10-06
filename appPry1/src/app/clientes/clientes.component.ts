import { Component, OnInit } from '@angular/core';
import { DialogProveedorComponent } from '../dialog-proveedor/dialog-proveedor.component';
import { Api } from '../servicios/api';
import { Cliente } from '../servicios/modelos/cliente';
import { ClientesCategorias } from '../servicios/modelos/clientesCategorias';
import { ClienteMetodo } from '../servicios/modelos/clientesMetodos';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
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
export class ClientesComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos : Cliente;
  public categorias : ClientesCategorias;
  public metodos : ClienteMetodo;
  public nombre : string;
  public categoria : string = '';
  public metodo : string = '';

  constructor(public dialog: MatDialog,
    private api: Api) {
  }

  ngOnInit(): void {
    this.getcliente();
    this.getclientecategoria();
    this.getclientemetodo();
  }

  cambioCategoria(cate: string) {
    this.categoria = cate;
  }
  
  getclienteFill() {
    if (this.nombre == null) {
      this.nombre ='XD';
    }
    if (this.categoria == '') {
      this.categoria = 'XD';
    }
    if (this.metodo == '') {
      this.metodo = 'XD';
    }
    this.api.getClienteFiltro(this.nombre, this.categoria, this.metodo).subscribe(Cliente => {
      this.contenidos = Cliente;
    });
    this.nombre = null;
    this.categoria = '';
    this.metodo = '';
  }

  getcliente() {
    this.api.getClientes().subscribe(Cliente => {
      this.contenidos = Cliente;
    });
  }

  getclientecategoria() {
    this.api.getClientesCategorias().subscribe(ClientesCategorias => {
      this.categorias = ClientesCategorias;
    });
  }

  getclientemetodo() {
    this.api.getClientesMetodo().subscribe(ClienteMetodo => {
      this.metodos = ClienteMetodo;
    });
  }

  dialogClientes(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogProveedorComponent, {
      width: '800px', height: '550px',
      data: cliente
    })
  }

}
