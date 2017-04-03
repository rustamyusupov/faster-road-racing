import React, { Component } from 'react';
import Title from '../Title/Title';
import Table from '../Table/Table';
import './App.css';
import data from '../../data/half-marathon.json';

class App extends Component {
  render() {
    const { hm2 } = data;

    return (
      <div className="app">
        <Title component={'h2'} text={hm2.title} />
        <Table data={hm2} />
      </div>
    );
  }
}

export default App;
