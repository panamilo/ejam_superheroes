import axios from './api'; // Import the axios instance from api.js
import MockAdapter from 'axios-mock-adapter';
import { getSuperheroes, addSuperhero } from './api';

describe('API tests', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test('getSuperheroes should fetch superheroes', async () => {
    const superheroes = [{ name: 'Superman', superpower: 'Flight', humility: 10 }];
    mock.onGet('/superheroes').reply(200, superheroes);

    const response = await getSuperheroes();
    expect(response.data).toEqual(superheroes);
  });

  test('addSuperhero should add a new superhero', async () => {
    const newSuperhero = { name: 'Batman', superpower: 'Detective skills', humility: 8 };
    mock.onPost('/superheroes').reply(200);

    const response = await addSuperhero(newSuperhero);
    expect(response.status).toBe(200);
  });
});