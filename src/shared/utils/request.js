import axios from 'axios';
import RequestError from '../base/exceptions/RequestError';

const postProcess = response => response.data;

export default function request(url, options) {
  const headers = {
    Accept: 'application/vnd.github.mercy-preview+json',
  };

  return axios({ url, timeout: 8000, headers, ...options })
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
