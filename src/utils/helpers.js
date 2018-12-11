import { API_URL } from './constants';

const base = API_URL.endsWith('/') ? API_URL : `${API_URL}/`;
const isFullUrlRegex = new RegExp('^(http|https)://', 'i');

export const prepareUrl = (url, baseUrl = base) => {
  // if the url is absolute, that is it begins with http or https
  // we will return it immediately
  if (isFullUrlRegex.test(url)) return url;

  let path = url;
  let preparedBase = baseUrl;

  if (!preparedBase.endsWith('/')) {
    preparedBase = `${baseUrl}/`;
  }
  if (!path) {
    throw new Error('Url is not given');
  }
  if (path.startsWith('/')) {
    path = path.replace('/', '').trim();
  }
  return `${preparedBase}${path}`;
};
