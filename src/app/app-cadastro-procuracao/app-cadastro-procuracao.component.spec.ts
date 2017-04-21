import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroProcuracaoComponent } from './app-cadastro-procuracao.component';

describe('AppCadastroProcuracaoComponent', () => {
  let component: AppCadastroProcuracaoComponent;
  let fixture: ComponentFixture<AppCadastroProcuracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCadastroProcuracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCadastroProcuracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
