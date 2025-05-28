import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WorkshopController } from './workshop.controller';
import { join } from 'path';
import * as fs from 'fs';

describe('WorkshopController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [WorkshopController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/workshop/devsecops (GET) should return the markdown file content', async () => {
    const filePath = join(__dirname, '..', '..', 'assets', 'devsecops.md');
    const expectedContent: string = fs.readFileSync(filePath, 'utf-8');

    const response = await request(app.getHttpServer() as import('http').Server)
      .get('/workshop/devsecops')
      .expect(200);

    expect(response.text).toBe(expectedContent);
  });
});
