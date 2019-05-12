import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import ToDoApp from '../components/ToDoApp';
import withAuthentication from '../containers/withAuthentication';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/todoapp" component={withAuthentication(ToDoApp)} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;