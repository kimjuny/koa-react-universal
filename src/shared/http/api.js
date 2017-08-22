import request from '../utils/request';
import { objectToQueryString } from '../utils/url';

const base = 'https://api.github.com';

/**
 * Github RESTful API v3:
 * @link https://developer.github.com/v3/
 */
class API {
  static listRepositories({ query }) {
    return request(`${base}/search/repositories${objectToQueryString(query)}`);
  }
}

export default API;
