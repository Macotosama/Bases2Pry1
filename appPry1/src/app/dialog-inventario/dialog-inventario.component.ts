import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Inventario } from '../servicios/modelos/inventario';

@Component({
  selector: 'app-dialog-inventario',
  templateUrl: './dialog-inventario.component.html',
  styleUrls: ['./dialog-inventario.component.scss']
})
export class DialogInventarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogInventarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inventario) {}

  ngOnInit(): void {
  }

}
