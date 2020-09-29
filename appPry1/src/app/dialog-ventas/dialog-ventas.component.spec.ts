import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVentasComponent } from './dialog-ventas.component';

describe('DialogVentasComponent', () => {
  let component: DialogVentasComponent;
  let fixture: ComponentFixture<DialogVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
