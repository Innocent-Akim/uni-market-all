import { Test, TestingModule } from '@nestjs/testing';
import { SuccursaleController } from './succursale.controller';

describe('SuccursaleController', () => {
  let controller: SuccursaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuccursaleController],
    }).compile();

    controller = module.get<SuccursaleController>(SuccursaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
