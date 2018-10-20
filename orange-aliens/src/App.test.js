import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
	ReactDOM.render(
		<Router>
			<div>
				<Route exact path="/" component={App} />
			</div>
		</Router>, 
		div
	);
  ReactDOM.unmountComponentAtNode(div);
});
