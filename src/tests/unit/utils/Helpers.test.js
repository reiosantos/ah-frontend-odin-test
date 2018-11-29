import { prepareUrl } from 'utils/helpers';
import { API_URL } from 'utils/constants';

describe('Helper tests', () => {
  test("doesn't modify urls that begin with http and https ", () => {
    const fullUrl = 'https://github.com/andela';

    expect(prepareUrl(fullUrl, 'localhost:5000')).toEqual(fullUrl);
  });

  test('prepareUrl concatenates the path and base url', () => {
    expect(prepareUrl('users', 'localhost:5000')).toEqual('localhost:5000/users');
  });

  test('prepareUrl throws an error if no path is given', () => {
    expect(() => prepareUrl()).toThrow('Url is not given');
  });

  test('prepareUrl users API url if no base url is given', () => {
    expect(prepareUrl('users')).toEqual(`${API_URL}users`);
  });
});
