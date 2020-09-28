import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInventarioComponent } from './dialog-inventario.component';

describe('DialogInventarioComponent', () => {
  let component: DialogInventarioComponent;
  let fixture: ComponentFixture<DialogInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
