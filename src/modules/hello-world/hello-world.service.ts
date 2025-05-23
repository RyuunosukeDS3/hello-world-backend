import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  helloDevs(): { hello: string } {
    return { hello: `Hello Devs!` };
  }
}
