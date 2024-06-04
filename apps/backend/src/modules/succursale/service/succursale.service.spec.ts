import { Test, TestingModule } from '@nestjs/testing';
import { SuccursaleService } from './succursale.service';

describe('SuccursaleService', () => {
  let service: SuccursaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuccursaleService],
    }).compile();

    service = module.get<SuccursaleService>(SuccursaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
