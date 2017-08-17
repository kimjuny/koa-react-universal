import request from '../utils/request';
import { objectToQueryString } from '../utils/url';

const base = 'https://api.github.com';

class API {
  static listRepositories({ query }) {
    return request(`${base}/search/repositories${objectToQueryString(query)}`);
  }
}

export default API;
