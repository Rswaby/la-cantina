import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Auth } from "../src/components";
import { ExploreEventsContainer, CreateEvent, Header } from './containers';
import * as serviceWorker from './serviceWorker';
import EventDescrip from './containers/Event-Descrip/EventDescrip';


ReactDOM.render(
  <Router>
      <div>
        <Header />
        <div style={{ marginTop: '55px' }}>
          <Route exact path="/" render={props => <App auth={""} {...props} />} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/explore" component={ExploreEventsContainer} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route exact path="/explore/:text/" component={ExploreEventsContainer} />
          <Route exact path="/event/:eventid/:eventurl" component={EventDescrip} />
        </div>
      </div>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
