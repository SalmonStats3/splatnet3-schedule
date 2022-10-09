import { Test, TestingModule } from '@nestjs/testing';
import { SplatoonAccessTokenController } from './splatoon_access_token.controller';

describe('SplatoonAccessTokenController', () => {
  let controller: SplatoonAccessTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SplatoonAccessTokenController],
    }).compile();

    controller = module.get<SplatoonAccessTokenController>(SplatoonAccessTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
