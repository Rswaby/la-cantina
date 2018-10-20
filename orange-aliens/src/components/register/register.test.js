
import React from 'react';
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './login';

enzyme.configure({ adapter: new Adapter() });

describe('Register', () => {
	const wrapper = shallow(<Login />);

	test('state on submit', () => {
		// check state on submit
	})

	test('state on change', () => {
		// make sure state is changing with value
	})
	
})

