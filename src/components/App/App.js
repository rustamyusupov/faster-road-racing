import React, { Component } from 'react';
import './App.css';
import Schedule from '../Schedule/Schedule';
import data from '../../data/half-marathon2.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Schedule plan={data} />
      </div>
    );
  }
}

export default App;
