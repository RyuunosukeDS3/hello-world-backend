import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Server } from 'http';

import { AppModule } from '../src/app.module'; // ✅ Import the full app module

describe('HelloWorldController (e2e)', () => {
  let app: INestApplication;
  let server: Server;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // ✅ This ensures full instrumentation
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer() as unknown as Server;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/hello (GET) returns { message: "Hello Devs!" }', async () => {
    await request(server)
      .get('/hello')
      .expect(200)
      .expect({ message: 'Hello Devs!' });
  });

  it('/theme (GET) returns { theme: "light" }', async () => {
    await request(server).get('/theme').expect(200).expect({ theme: 'light' });
  });

  it('/workshop/devsecops (GET) returns md file', async () => {
    const response = await request(app.getHttpServer() as import('http').Server)
      .get('/workshop/devsecops')
      .expect(200);
    expect(response.text).toContain(
      '# 🛡️ Workshop: Introdução ao DevSecOps para Iniciantes',
    );
  });
});
