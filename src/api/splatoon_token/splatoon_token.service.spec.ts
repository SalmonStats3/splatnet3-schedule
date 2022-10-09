import { Test, TestingModule } from '@nestjs/testing';
import { SplatoonTokenService } from './splatoon_token.service';

describe('SplatoonTokenService', () => {
  let service: SplatoonTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SplatoonTokenService],
    }).compile();

    service = module.get<SplatoonTokenService>(SplatoonTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
