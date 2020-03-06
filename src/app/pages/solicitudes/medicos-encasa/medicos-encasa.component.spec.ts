import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEncasaComponent } from './medicos-encasa.component';

describe('MedicosEncasaComponent', () => {
  let component: MedicosEncasaComponent;
  let fixture: ComponentFixture<MedicosEncasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosEncasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosEncasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
