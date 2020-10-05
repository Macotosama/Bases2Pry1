import { Component, OnInit, Inject } from '@angular/core';
import { Ventas } from "../servicios/modelos/ventas";
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ventas',
  templateUrl: './dialog-ventas.component.html',
  styleUrls: ['./dialog-ventas.component.scss']
})
export class DialogVentasComponent implements OnInit {
  public contenidos: Ventas;

  constructor(public dialogRef: MatDialogRef<DialogVentasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ventas) {
     }

  ngOnInit(): void {
  }
}
