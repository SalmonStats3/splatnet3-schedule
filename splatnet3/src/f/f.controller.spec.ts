import { Test, TestingModule } from '@nestjs/testing';
import { FController } from './f.controller';

describe('FController', () => {
  let controller: FController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FController],
    }).compile();

    controller = module.get<FController>(FController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
