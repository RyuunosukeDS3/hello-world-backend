import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  let service: HelloWorldService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloWorldService],
    }).compile();

    service = module.get<HelloWorldService>(HelloWorldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('helloDevs', () => {
    it('should return an object with hello message', () => {
      const result = service.helloDevs();
      expect(result).toEqual({ hello: 'Hello Devs!' });
      expect(result.message).toBe('Hello Devs!');
      expect(typeof result.message).toBe('string');
    });
  });
});
