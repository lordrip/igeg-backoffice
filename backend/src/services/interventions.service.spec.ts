import { Test, TestingModule } from '@nestjs/testing';
import { InterventionsService } from './Interventions.service';

describe('InterventionsService', () => {
  let service: InterventionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterventionsService],
    }).compile();

    service = module.get<InterventionsService>(InterventionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
