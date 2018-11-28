import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { notify } from 'react-notify-toast';

configure({ adapter: new Adapter() });

global.fetch = require('fetch-mock').sandbox();

global.fetch.get('*', { hello: 'world' });

notify.show = jest.fn();
