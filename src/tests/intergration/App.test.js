import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows hello world', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header').text()).toEqual('Odin devs');
});
