import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import './Reset.css';
import './App.scss';
// import Header from '../components/Header'
// import List from '../components/List';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <List />
//       </div>
//     );
//   }
// }
// export default App;



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
        </Switch>
      </Router>
    );
  }
}

export default App;