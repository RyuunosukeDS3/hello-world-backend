import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

@Controller('hello')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Get()
  helloDev(): { hello: string } {
    return this.helloWorldService.helloDevs();
  }
}
