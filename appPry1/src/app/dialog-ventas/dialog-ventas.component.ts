import { Component, OnInit, Inject } from '@angular/core';
import { Ventas } from "../servicios/modelos/ventas";
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError, MatDialog } from '@angular/material/dialog';
import { DialogProveedorComponent } from '../dialog-proveedor/dialog-proveedor.component';
import { Api } from '../servicios/api';
import { Cliente } from '../servicios/modelos/cliente';

@Component({
  selector: 'app-dialog-ventas',
  templateUrl: './dialog-ventas.component.html',
  styleUrls: ['./dialog-ventas.component.scss']
})
export class DialogVentasComponent implements OnInit {
  public contenidos: Ventas;

  constructor(public dialogRef: MatDialogRef<DialogVentasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ventas, public dialog: MatDialog,
    private api: Api) {
     }

  ngOnInit(): void {
  }

  dialogClientes(nombre: string, metodo: string) {
    var ditis 
    this.api.getClienteFiltro(nombre, null, metodo).subscribe(Cliente => {
      ditis = Cliente;
      console.log(metodo)
      console.log(ditis)
      const dialogRef = this.dialog.open(DialogProveedorComponent, {
        width: '800px', height: '550px', data: ditis
      })
    });
  }
}
