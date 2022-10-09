import { Test, TestingModule } from '@nestjs/testing';
import { SplatoonTokenController } from './splatoon_token.controller';

describe('SplatoonTokenController', () => {
  let controller: SplatoonTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SplatoonTokenController],
    }).compile();

    controller = module.get<SplatoonTokenController>(SplatoonTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
