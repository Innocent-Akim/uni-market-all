import { Test, TestingModule } from '@nestjs/testing';
import { StoreStockController } from './store.stock.controller';

describe('StoreStockController', () => {
  let controller: StoreStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreStockController],
    }).compile();

    controller = module.get<StoreStockController>(StoreStockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
