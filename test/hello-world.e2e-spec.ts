import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Server } from 'http';

import { HelloWorldModule } from '../src/modules/hello-world/hello-world.module';

describe('HelloWorldController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HelloWorldModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/hello (GET) returns { hello: "Hello Devs!" }', () => {
    return request(app.getHttpServer() as Server)
      .get('/hello')
      .expect(200)
      .expect({ hello: 'Hello Devs!' });
  });
});
