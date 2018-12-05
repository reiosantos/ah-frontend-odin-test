import { mapStateToProps } from '.';

const user = { name: 'Ahimbisibwe Roland' };
const article = { title: 'Hello world' };

const initialState = { user, article };

describe('mapStateToProps', () => {
  test('It returns an empty object if key is a string', () => {
    expect(mapStateToProps('name')(initialState)).toEqual({});
  });

  test('It extracts state using array keys', () => {
    expect(mapStateToProps(['article'])(initialState)).toEqual({ article });
  });
  test('It extracts state using object keys', () => {
    expect(mapStateToProps({ name: 'user.name' })(initialState)).toEqual({ name: user.name });
  });
});
