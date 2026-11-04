import request from 'supertest';
import app from '../src/app';

describe('GET /api/health', () => {
  test('returns HTTP 200 and the API status', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
