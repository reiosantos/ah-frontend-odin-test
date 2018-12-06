import { mapActionsToProps } from 'containers/authentication/SignUpModal';

describe('MapActionsToProps', () => {
  it('maps actions to props', () => {
    const dispatch = jest.fn();
    const props = mapActionsToProps(dispatch);
    props.signupHandler();
    props.hideSignUpModal();
    expect(dispatch).toBeCalled();
  });
});
