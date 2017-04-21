import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaProcuracaoComponent } from './app-consulta-procuracao.component';

describe('AppConsultaProcuracaoComponent', () => {
  let component: AppConsultaProcuracaoComponent;
  let fixture: ComponentFixture<AppConsultaProcuracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConsultaProcuracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConsultaProcuracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
