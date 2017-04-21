import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroSistemaComponent } from './app-cadastro-sistema.component';

describe('AppCadastroSistemaComponent', () => {
  let component: AppCadastroSistemaComponent;
  let fixture: ComponentFixture<AppCadastroSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCadastroSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCadastroSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
