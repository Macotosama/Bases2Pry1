import { Component, OnInit } from '@angular/core';
import { DialogInventarioComponent } from '../dialog-inventario/dialog-inventario.component';
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
  public contenidos = [1, 2, 3];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogClientes() {
    const dialogRef = this.dialog.open(DialogInventarioComponent, {
      width: '800px', height: '550px'
    })
  }
}
