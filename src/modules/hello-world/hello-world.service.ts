import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  helloDevs(): { message: string } {
    return { message: `Hello Devs!` };
  }
}
