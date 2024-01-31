import request from 'supertest';
import app from '../src/app';
import { FormConfigs } from '../src/api/formConfig/formConfig.model';

beforeAll(async () => {
  try {
    await FormConfigs.drop();
  } catch (error) {}
});

describe('GET /api/v1/form-configs', () => {
  it('responds with a json empty array', async () => {
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
describe('POST /api/v1/form-configs', () => {
  it('responds with a error if formConfig is not valid', async () => {
    await request(app)
      .post('/api/v1/form-configs') 
      .set('Accept', 'application/json')
      .send({
        id: '1',
        title: 'My form',
        saveButtonLabel: 'Save1',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty('message');
      });
  }); 
  it('responds with insertResult ', async () => {
    await request(app)
      .post('/api/v1/form-configs') 
      .set('Accept', 'application/json')
      .send({
        id: '1',
        title: 'My form',
        saveButtonLabel: 'Save1',
        config:[
          {
            type: 'text',
            label: 'First Name',
            name: 'firstName',
            required: true,
          },
          {
            type: 'text',
            label: 'Last Name',
            name: 'lastName',
            required: true,
          },
        ],
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('_id');
      });
  });
});
