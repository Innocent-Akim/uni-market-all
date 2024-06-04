import { Test, TestingModule } from '@nestjs/testing';
import { SheetStoreService } from './sheet.store.service';

describe('SheetStoreService', () => {
  let service: SheetStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetStoreService],
    }).compile();

    service = module.get<SheetStoreService>(SheetStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
