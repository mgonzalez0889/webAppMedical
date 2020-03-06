import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarCirugiasComponent } from './cotizar-cirugias.component';

describe('CotizarCirugiasComponent', () => {
  let component: CotizarCirugiasComponent;
  let fixture: ComponentFixture<CotizarCirugiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizarCirugiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizarCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
