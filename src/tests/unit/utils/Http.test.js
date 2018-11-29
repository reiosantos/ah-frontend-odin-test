import Http from 'utils/Http';

const url = 'localhost:5000/';
let http;

describe('Http tests', () => {
  beforeEach(() => {
    http = new Http(url);
  });

  test('it correctly sets the base url', () => {
    expect(http.baseUrl).toEqual(url);
  });

  test('it adds an authorization header ', () => {
    const token = 'Some token';

    http.setToken(token);
    expect(http.headers).toEqual(expect.objectContaining({ Authorization: `Bearer ${token}` }));
  });

  test('it sets the default content-type to application/json', () => {
    expect(http.headers).toEqual(expect.objectContaining({ 'content-type': 'application/json' }));
  });

  test('it triggers the on fail hooks', () => {
    const callBack = jest.fn();

    http.onFail(callBack);
    http.handleFailure(new Error());
    expect(callBack).toHaveBeenCalled();
  });
});

const makeRequest = jest.fn().mockResolvedValue({ response: [1, 2] });
const convertResponse = jest.fn();

convertResponse.mockResolvedValue([]);

describe('It uses the right verbs', () => {
  beforeEach(() => {
    http.makeRequest = makeRequest;
    Http.convertResponse = convertResponse;
  });

  test('It makes a get request', () => {
    http
      .get('/users')
      .then(({ response }) => expect(response).toEqual(expect.arrayContaining([1])));
  });

  test('it passes with an okay response', () => {
    const callBack = jest.fn();

    http.onPass(callBack);
    http.onSucess({ ok: true }).then(() => {
      expect(callBack).toHaveBeenCalled();
      expect(convertResponse).toHaveBeenCalled();
    });
  });

  test('it fails with a non okay response', () => {
    const callBack = jest.fn();

    http.onFail(callBack);
    http.onSucess({ ok: false }).catch(() => {
      expect(callBack).toHaveBeenCalled();
    });
  });

  test('it ,makes a post request', () => {
    http.post('/users', { name: 'roland' });
    expect(makeRequest).toHaveBeenCalledWith('/users', 'POST', { name: 'roland' });
  });

  test('it ,makes a put request', () => {
    http.put('/users', { name: 'roland' });
    expect(makeRequest).toHaveBeenCalledWith('/users', 'PUT', { name: 'roland' });
  });

  test('it ,makes a patch request', () => {
    http.patch('/users', { name: 'roland' });
    expect(makeRequest).toHaveBeenCalledWith('/users', 'PATCH', { name: 'roland' });
  });

  test('it ,makes a delete request', () => {
    http.delete('/users', { name: 'roland' });
    expect(makeRequest).toHaveBeenCalledWith('/users', 'DELETE', { name: 'roland' });
  });

  test('it adds the post data to the request options', () => {
    const data = { name: 'roland', age: 21 };

    expect(http.makeOptions('GET', data)).toEqual(
      expect.objectContaining({ body: JSON.stringify(data) }),
    );
  });
});
