import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Proveedor } from '../servicios/modelos/proveedor'

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.scss']
})
export class DialogClienteComponent implements OnInit {
  public position;

  constructor(public dialogRef: MatDialogRef<DialogClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proveedor) {
      this.position = {lat: data.Latitude, lng: data.Longitude}
     }

  ngOnInit(): void {
  }

}
