import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEspecialesComponent } from './medicos-especiales.component';

describe('MedicosEspecialesComponent', () => {
  let component: MedicosEspecialesComponent;
  let fixture: ComponentFixture<MedicosEspecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosEspecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
