import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProveedorComponent } from './dialog-proveedor.component';

describe('DialogProveedorComponent', () => {
  let component: DialogProveedorComponent;
  let fixture: ComponentFixture<DialogProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
