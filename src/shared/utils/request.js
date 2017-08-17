import axios from 'axios';
import RequestError from '../base/exceptions/RequestError';

const postProcess = (response) => {
  return response.data;
};

export default function request(url, options) {
  return axios({ url, timeout: 8000, ...url })
    .then(postProcess)
    .catch((error) => {
      const response = error.response;
      if (response && response.data.message === 'Validation Failed') {
        throw new RequestError('Validation Failed', error.response.data.errors);
      } else {
        throw error;
      }
    });
}
