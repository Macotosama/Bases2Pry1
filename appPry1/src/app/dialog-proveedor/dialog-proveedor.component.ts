import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Cliente } from '../servicios/modelos/cliente';

@Component({
  selector: 'app-dialog-proveedor',
  templateUrl: './dialog-proveedor.component.html',
  styleUrls: ['./dialog-proveedor.component.scss']
})
export class DialogProveedorComponent implements OnInit {
  public position;

  constructor(public dialogRef: MatDialogRef<DialogProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) { 
      this.position = {lat: data.Latitud, lng: data.Longitud}
    }

  ngOnInit(): void {
  }

}
