import request from 'supertest';
import app from '../src/app';
import { FormConfigs } from '../src/api/formConfig/formConfig.model';

beforeAll(async () => {
  try {
    await FormConfigs.drop();
  } catch (error) {}
});

describe('GET /api/v1/form-configs', () => {
  it('responds with a json message', async () => {
    await request(app)
      .get('/api/v1/form-configs') 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body).toEqual([]);
      });
  }); 
});