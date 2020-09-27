import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClienteComponent } from './dialog-cliente.component';

describe('DialogClienteComponent', () => {
  let component: DialogClienteComponent;
  let fixture: ComponentFixture<DialogClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
