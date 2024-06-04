import { Test, TestingModule } from '@nestjs/testing';
import { SupplyDetailsController } from './supply.details.controller';

describe('SupplyDetailsController', () => {
  let controller: SupplyDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyDetailsController],
    }).compile();

    controller = module.get<SupplyDetailsController>(SupplyDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
