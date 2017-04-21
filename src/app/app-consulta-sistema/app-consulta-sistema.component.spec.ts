import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaSistemaComponent } from './app-consulta-sistema.component';

describe('AppConsultaSistemaComponent', () => {
  let component: AppConsultaSistemaComponent;
  let fixture: ComponentFixture<AppConsultaSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConsultaSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConsultaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
