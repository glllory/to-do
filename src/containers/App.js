import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import ToDoApp from '../components/ToDoApp';
import withAuthentication from '../containers/withAuthentication';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/todoapp" component={withAuthentication(ToDoApp)} />
        </Switch>
      </Router>
    );
  }
}

export default App;