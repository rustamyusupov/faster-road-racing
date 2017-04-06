import React, { Component } from 'react';
import './App.css';
import Title from '../Title/Title';
import Schedule from '../Schedule/Schedule';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app__title'>
          <Title size='big' align='center' data='Faster Road Racing' />
        </div>

        <Schedule plan='half-marathon2' />
      </div>
    );
  }
}

export default App;
