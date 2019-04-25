import React, { Component } from 'react';
import './Reset.css';
import './App.scss';
import Header from './components/Header'
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}
export default App;
