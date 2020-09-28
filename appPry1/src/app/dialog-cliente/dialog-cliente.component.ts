import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.scss']
})
export class DialogClienteComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
