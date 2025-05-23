/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './hello-world.controller';
import { HelloWorldService } from './hello-world.service';

describe('HelloWorldController', () => {
  let controller: HelloWorldController;
  let service: HelloWorldService;

  const mockService = {
    helloDevs: jest.fn().mockReturnValue({ hello: 'Hello Devs!' }),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [
        {
          provide: HelloWorldService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
    service = module.get<HelloWorldService>(HelloWorldService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('helloDev', () => {
    it('should call helloDevs on the service and return its result', () => {
      const result = controller.helloDev();

      expect(service.helloDevs).toHaveBeenCalled();
      expect(result).toEqual({ hello: 'Hello Devs!' });
    });
  });
});
