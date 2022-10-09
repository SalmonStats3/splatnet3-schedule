import { Test, TestingModule } from '@nestjs/testing';
import { BulletTokensController } from './bullet_tokens.controller';

describe('BulletTokensController', () => {
  let controller: BulletTokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BulletTokensController],
    }).compile();

    controller = module.get<BulletTokensController>(BulletTokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
