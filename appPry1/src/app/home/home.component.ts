import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
        transform: 'translateY(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(5000, style({
          transform: 'translateY(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
