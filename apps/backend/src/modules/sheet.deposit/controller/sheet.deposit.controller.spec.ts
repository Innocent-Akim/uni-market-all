import { Test, TestingModule } from '@nestjs/testing';
import { SheetDepositController } from './sheet.deposit.controller';

describe('SheetDepositController', () => {
  let controller: SheetDepositController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheetDepositController],
    }).compile();

    controller = module.get<SheetDepositController>(SheetDepositController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
