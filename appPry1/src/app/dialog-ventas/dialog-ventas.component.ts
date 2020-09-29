import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-ventas',
  templateUrl: './dialog-ventas.component.html',
  styleUrls: ['./dialog-ventas.component.scss']
})
export class DialogVentasComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }
}
