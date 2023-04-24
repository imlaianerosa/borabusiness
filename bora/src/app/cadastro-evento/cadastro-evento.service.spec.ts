import { TestBed } from '@angular/core/testing';

import { CadastroEventoService } from './cadastro-evento.service';

describe('CadastroEventoService', () => {
  let service: CadastroEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
