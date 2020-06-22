import { TestBed } from '@angular/core/testing';

import { CombatIAService } from './combat-ia.service';

describe('CombatIAService', () => {
  let service: CombatIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
