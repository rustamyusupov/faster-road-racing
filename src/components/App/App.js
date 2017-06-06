import React, { PureComponent } from 'react';
import './App.css';
import Title from '../Title/Title';
import Schedule from '../Schedule/Schedule';

export default class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='app__title'>
          <Title size='big' align='center'>
            Faster Road Racing
          </Title>
        </div>

        <Schedule plan='half-marathon1' />
      </div>
    );
  }
}
