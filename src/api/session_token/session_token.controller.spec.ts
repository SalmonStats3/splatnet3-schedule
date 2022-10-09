import { Test, TestingModule } from '@nestjs/testing';
import { SessionTokenController } from './session_token.controller';

describe('SessionTokenController', () => {
  let controller: SessionTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionTokenController],
    }).compile();

    controller = module.get<SessionTokenController>(SessionTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
