import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Auth } from "../src/components";
import LHeader from "./components/LHeader/Header";
import { Header, ExploreEventsContainer, CreateEvent } from './containers';
import * as serviceWorker from './serviceWorker';
import EventDescrip from './containers/Event-Descrip/EventDescrip';
// Graphql components
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(AUTH_TOKEN),
    },
  },
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink),
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <div>
        <LHeader />
        <div style={{ marginTop: '35px' }}>
          <Route exact path="/" render={props => <App auth={""} {...props} />} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/explore" component={ExploreEventsContainer} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route exact path="/explore/:entityName/:entityId" component={ExploreEventsContainer} />
          <Route exact path="/event/:eventid" component={EventDescrip} />
        </div>
      </div>
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
