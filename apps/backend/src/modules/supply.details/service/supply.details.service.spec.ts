import { Test, TestingModule } from '@nestjs/testing';
import { SupplyDetailsService } from './supply.details.service';

describe('SupplyDetailsService', () => {
  let service: SupplyDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyDetailsService],
    }).compile();

    service = module.get<SupplyDetailsService>(SupplyDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
