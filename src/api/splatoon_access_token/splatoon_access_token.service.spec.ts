import { Test, TestingModule } from '@nestjs/testing';
import { SplatoonAccessTokenService } from './splatoon_access_token.service';

describe('SplatoonAccessTokenService', () => {
  let service: SplatoonAccessTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SplatoonAccessTokenService],
    }).compile();

    service = module.get<SplatoonAccessTokenService>(SplatoonAccessTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
