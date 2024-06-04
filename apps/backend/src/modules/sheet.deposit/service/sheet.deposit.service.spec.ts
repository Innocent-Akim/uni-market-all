import { Test, TestingModule } from '@nestjs/testing';
import { SheetDepositService } from './sheet.deposit.service';

describe('SheetDepositService', () => {
  let service: SheetDepositService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetDepositService],
    }).compile();

    service = module.get<SheetDepositService>(SheetDepositService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
