import { Test, TestingModule } from '@nestjs/testing';
import { DepositStockService } from './deposit.stock.service';

describe('DepositStockService', () => {
  let service: DepositStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositStockService],
    }).compile();

    service = module.get<DepositStockService>(DepositStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
