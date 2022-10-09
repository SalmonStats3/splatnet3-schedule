import { Test, TestingModule } from '@nestjs/testing';
import { FService } from './f.service';

describe('FService', () => {
  let service: FService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FService],
    }).compile();

    service = module.get<FService>(FService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
