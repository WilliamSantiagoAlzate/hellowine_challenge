//Import api
import axios from 'axios';
import { apiCall } from '../../saga/apiCall';

jest.mock('axios')

describe('Apicall', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('Should api request works', async () => {
    const response = await apiCall('/', 'GET');
    expect(response).toEqual(mockedAxios.get('/'));
  })
})