import { TestBed, inject } from '@angular/core/testing';

import { ProcuracoesService } from './procuracoes.service';

describe('ProcuracoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcuracoesService]
    });
  });

  it('should ...', inject([ProcuracoesService], (service: ProcuracoesService) => {
    expect(service).toBeTruthy();
  }));
});
