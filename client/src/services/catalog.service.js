import request from 'utils/request';
import { API_URL } from './constants';

const endpoint = `${API_URL}/phones`;

const getPhones = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return request(endpoint, requestOptions);
}

const getPhone = (id) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const url = `${endpoint}/${id}`;
  return request(url, requestOptions);
}

export default {
  getPhones,
  getPhone,
};

