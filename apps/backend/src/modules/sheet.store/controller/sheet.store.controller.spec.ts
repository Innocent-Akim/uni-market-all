import { Test, TestingModule } from '@nestjs/testing';
import { SheetStoreController } from './sheet.store.controller';

describe('SheetStoreController', () => {
  let controller: SheetStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheetStoreController],
    }).compile();

    controller = module.get<SheetStoreController>(SheetStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
