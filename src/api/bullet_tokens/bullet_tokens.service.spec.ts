import { Test, TestingModule } from '@nestjs/testing';
import { BulletTokensService } from './bullet_tokens.service';

describe('BulletTokensService', () => {
  let service: BulletTokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletTokensService],
    }).compile();

    service = module.get<BulletTokensService>(BulletTokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
