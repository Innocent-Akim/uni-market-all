import { Test, TestingModule } from '@nestjs/testing';
import { StoreStockService } from './store.stock.service';

describe('StoreStockService', () => {
  let service: StoreStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreStockService],
    }).compile();

    service = module.get<StoreStockService>(StoreStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
