/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import {Header, ExploreEventsContainer, CreateEvent} from './containers'
//import Login from './components/login/login';
//import Register from './components/register/register';
import * as serviceWorker from './serviceWorker'
import EventDescrip from './containers/Event-Descrip/EventDescrip'
const auth = 'auth Props'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/" render={props => <App auth={auth} {...props} />} />
      <Route exact path="/explore" component={ExploreEventsContainer} />
      <Route exact path="/createEvent" component={CreateEvent} />
      <Route exact path="/explore/:entityName/:entityId" component={ExploreEventsContainer} />
      <Route exact path="/event/:eventid" component={EventDescrip} />
    </div>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
