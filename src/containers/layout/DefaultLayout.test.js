import { mapActionsToProps } from './DefaultLayout';

describe('MapActionsToProps', () => {
  it('maps actions to props', () => {
    const dispatch = jest.fn();
    const props = mapActionsToProps(dispatch);
    props.showSignUpModal();
    expect(dispatch).toBeCalled();
  });
});
