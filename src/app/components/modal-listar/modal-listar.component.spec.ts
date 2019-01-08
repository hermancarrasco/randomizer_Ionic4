import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListarComponent } from './modal-listar.component';

describe('ModalListarComponent', () => {
  let component: ModalListarComponent;
  let fixture: ComponentFixture<ModalListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
