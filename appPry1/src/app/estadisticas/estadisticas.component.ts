import { Component, OnInit } from '@angular/core';
import { DialogClienteComponent } from '../dialog-cliente/dialog-cliente.component'
import { Chart } from 'chart.js';
import { Api } from '../servicios/api';
import { ProveedoresTops } from '../servicios/modelos/proveedorestops';
import { ClientesTop } from '../servicios/modelos/clientestop';
import { TopProductos } from '../servicios/modelos/topproductos';
import { TopCliente } from '../servicios/modelos/topcliente';
import { TopProveedor } from '../servicios/modelos/topproveedor';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
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
export class EstadisticasComponent implements OnInit {
  public columnas = ['nombre', 'categoria', 'metodo'];
  public contenidos = [1, 2, 3];
  public columnasProveedor = ['Identificador', 'Nombre', 'Categoría' , 'Compra']; 
  public proveedores: ProveedoresTops;
  public filProveedor = 'altos';
  public filProvee: string;
  public myDatePicker1: string;
  public myDatePicker2: string;
  public myDatePicker3: string;
  public myDatePicker: string;
  public filCliente = 'altos';
  public filClient: string;
  public clientes: any;
  public fecha1Grafica1: string;
  public fecha2Grafica1: string;
  public datosGraf1: any;
  public topProductos: Chart;
  public label1 =['a','b','c','d','e','f','g','h','i','j'];
  public data1 = [1,2,3,4,5,6,7,8,9,10];
  public fecha1Grafica2: string;
  public fecha2Grafica2: string;
  public topCliente: any;
  public topClientes: Chart;
  public label2 =['a','b','c','d','e','f','g','h','i','j'];
  public data2 = [1,2,3,4,5,6,7,8,9,10];
  public fecha1Grafica3: string;
  public fecha2Grafica3: string;
  public topProveedor: any;
  public topProveedores: Chart;
  public label3 =['a','b','c','d','e','f','g','h','i','j'];
  public data3 = [1,2,3,4,5,6,7,8,9,10];


  constructor(public dialog: MatDialog, private api: Api) { }

  ngOnInit(): void {
    this.initChart();
    this.initChart2();
    this.initChart3();
  }

  filGrafic3() {
    if(this.fecha1Grafica3 != null && this.fecha2Grafica3 != null) { 
        if(Date.parse(this.fecha1Grafica3) < Date.parse(this.fecha2Grafica3)) {
          if(Date.parse('2016-05-31') >= Date.parse(this.fecha2Grafica3) && Date.parse('2013-01-01') <= Date.parse(this.fecha1Grafica3)){
            var f1 = this.fecha1Grafica3.toString().split(' ');
            var f2 = this.fecha2Grafica3.toString().split(' ');
            this.api.getTopProveedores(`${f1[3]}-${f1[1]}-${f1[2]}`,`${f2[3]}-${f2[1]}-${f2[2]}`).subscribe(Response => {
              this.topProveedor = Response;
              console.log(this.topProveedor)
              this.label3 = [];
              this.data3 = [];
              for(var i = 0; i < this.topProveedor.length; i++){
                this.label3.push(this.topProveedor[i].SupplierName);
                this.data3.push(this.topProveedor[i].PurchaseOrders);

              }
              this.topProveedores.chart.data.labels = this.label3;
              this.topProveedores.chart.data.datasets.forEach((dataset) => {
                dataset.data = this.data3;
              })
              this.topProveedores.update();
            })
            this.fecha1Grafica2 = null;
            this.fecha2Grafica2 = null;
          }
        }
    }
  }

  filGrafic2() {
    if(this.fecha1Grafica2 != null && this.fecha2Grafica2 != null) { 
        if(Date.parse(this.fecha1Grafica2) < Date.parse(this.fecha2Grafica2)) {
          if(Date.parse('2016-05-31') >= Date.parse(this.fecha2Grafica2) && Date.parse('2013-01-01') <= Date.parse(this.fecha1Grafica2)){
            var f1 = this.fecha1Grafica2.toString().split(' ');
            var f2 = this.fecha2Grafica2.toString().split(' ');
            this.api.getTopClientes(`${f1[3]}-${f1[1]}-${f1[2]}`,`${f2[3]}-${f2[1]}-${f2[2]}`).subscribe(Response => {
              this.topCliente = Response;
              this.label2 = [];
              this.data2 = [];
              for(var i = 0; i < this.topCliente.length; i++){
                this.label2.push(this.topCliente[i].CustomerName);
                this.data2.push(this.topCliente[i].TotalInvoices);

              }
              this.topClientes.chart.data.labels = this.label2;
              this.topClientes.chart.data.datasets.forEach((dataset) => {
                dataset.data = this.data2;
              })
              this.topClientes.update();
            })
            this.fecha1Grafica2 = null;
            this.fecha2Grafica2 = null;
          }
        }
    }
  }

  filGrafic1() {
    if(this.fecha1Grafica1 != null && this.fecha2Grafica1 != null) { 
        if(Date.parse(this.fecha1Grafica1) < Date.parse(this.fecha2Grafica1)) {
          if(Date.parse('2016-05-31') >= Date.parse(this.fecha2Grafica1) && Date.parse('2013-01-01') <= Date.parse(this.fecha1Grafica1)){
            var f1 = this.fecha1Grafica1.toString().split(' ');
            var f2 = this.fecha2Grafica1.toString().split(' ');
            this.api.getTopProductos(`${f1[3]}-${f1[1]}-${f1[2]}`,`${f2[3]}-${f2[1]}-${f2[2]}`).subscribe(Response => {
              this.datosGraf1 = Response;
              this.label1 = [];
              this.data1 = [];
              for(var i = 0; i < this.datosGraf1.length; i++){
                this.label1.push(this.datosGraf1[i].StockItemName);
                this.data1.push(this.datosGraf1[i].Quantity);

              }
              this.topProductos.chart.data.labels = this.label1;
              this.topProductos.chart.data.datasets.forEach((dataset) => {
                dataset.data = this.data1;
              })
              this.topProductos.update();
            })
            this.fecha1Grafica1 = null;
            this.fecha2Grafica1 = null;
          }
        }
    }
  }

  filProveedores() {
    if(this.filProveedor == 'altos'){
      this.api.getFillProveedoresAltos(this.filProvee).subscribe(ProveedoresTops => {
        this.proveedores = ProveedoresTops;
      });
    } else if (this.filProveedor == 'bajo') {
      this.api.getFillProveedoresBajos(this.filProvee).subscribe(ProveedoresTops => {
        this.proveedores = ProveedoresTops;
      });
    } else {
      this.api.getFillProveedoresPromedio(this.filProvee).subscribe(ProveedoresTops => {
        this.proveedores = ProveedoresTops;
      });
    }
    this.filProvee = null;
  }

  filClientes() {
    if(this.filCliente == 'altos') {
      this.api.getFillClientesAltos(this.filClient).subscribe(ClientesTop => {
        console.log(ClientesTop);
        this.clientes = ClientesTop;
      });
    } else if (this.filCliente == 'bajo') {
      this.api.getFillClientesBajos(this.filClient).subscribe(ClientesTop => {
        this.clientes = ClientesTop;
      });
    } else {
      this.api.getFillClientesPromedio(this.filClient).subscribe(ClientesTop => {
        this.clientes = ClientesTop;
      });
    }
    this.filClient = null;
  }

  dialogClientes() {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: '800px', height: '550px'
    })
  }

  initChart(): void {
    var ctx = document.getElementById('ventas');
    this.topProductos = new Chart(ctx, {
        type: 'line',
        data: {
            labels: this.label1,
            datasets: [{
                label: 'Top Productos mejor vendidos',
                data: this.data1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)', 
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 77, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(46, 159, 64, 0.2)',
                    'rgba(255, 159, 200, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  initChart2(): void {
    var ctx = document.getElementById('ventas2');
    this.topClientes = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.label2,
            datasets: [{
                label: 'Top de compras de clientes',
                data: this.data2,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)', 
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 77, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(46, 159, 64, 0.2)',
                  'rgba(255, 159, 200, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  initChart3(): void {
    var ctx = document.getElementById('ventas3');
    this.topProveedores = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: this.label3,
            datasets: [{
                label: 'Top de compras a prooveedores',
                data: this.data3,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)', 
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 77, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(46, 159, 64, 0.2)',
                  'rgba(255, 159, 200, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

}
