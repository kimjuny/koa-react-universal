import parser from 'url-parse';

/**
 * parse URL
 * @param {*} url 
 * @return parsed result
 * {
 *   auth:
 *   hash:
 *   host: localhost:3000
 *   hostname: localhost
 *   href: http://localhost:3000/products?offset=0&limit=3000
 *   origin: http://localhost:3000
 *   password:
 *   pathname: /products
 *   port: 3000
 *   protocol: http
 *   query: {
 *     offset: 0,
 *     limit: 10,
 *   },
 *   slashes: true,
 *   username:
 * }
 * for mor detail please refer to: https://github.com/unshiftio/url-parse
 */
export const parse = (url) => {
  const parsed = parser(url);
  if (parsed.query.length > 0) {
    const qString = parsed.query.slice(1);
    const pairArray = qString.split('&');
    const query = {};
    pairArray.forEach((value) => {
      const node = value.split('=');
      query[node[0]] = node[1];
    });
    parsed.query = query;
  }
  return parsed;
};

/**
 * parse query object to query string
 * @param {*} obj 
 * @return String { hello: 'world', simple: 'example' } => '?hello=world&simple=example'
 */
export const objectToQueryString = (obj) => {
  const queryArray = Object.keys(obj).map(key => `${key}=${obj[key]}`);
  return `?${queryArray.join('&')}`;
};
