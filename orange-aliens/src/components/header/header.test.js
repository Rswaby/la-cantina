
import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';
import Login from '../login/login';

//import {Header, Login} from 'components'; 

enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
	const wrapper = shallow(<Header />);

	test('test login button', () => {
		wrapper.find('.login-button').simulate('click');
		expect(<Login />)
	})

	test('test register button', () => {
		wrapper.find('.register-button').simulate('click');
		expect(<Header />);

	})
})
