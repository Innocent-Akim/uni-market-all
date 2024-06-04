import { Test, TestingModule } from '@nestjs/testing';
import { DepositStockController } from './deposit.stock.controller';

describe('DepositStockController', () => {
  let controller: DepositStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositStockController],
    }).compile();

    controller = module.get<DepositStockController>(DepositStockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
