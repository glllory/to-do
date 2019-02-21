import React, { Component } from 'react';
import './Reset.css';
import './App.scss';
import Header from './header';
import TasksList from './tasksList';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <TasksList />
      </div>
    );
  }

}
export default App;

