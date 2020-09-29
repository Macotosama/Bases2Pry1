import { Component, OnInit } from '@angular/core';
import { DialogVentasComponent } from '../dialog-ventas/dialog-ventas.component'
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
  public contenidos = [1, 2, 3, 4, 5];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogClientes() {
    const dialogRef = this.dialog.open(DialogVentasComponent, {
      width: '800px', height: '550px'
    })
  }

}
