import React, { Component } from 'react';
import './Schedule.css';
import Title from '../Title/Title';
import Table from '../Table/Table';

class Schedule extends Component {
  render() {
    const { plan } = this.props;

    return (
      <section className='schedule'>
        <div className='schedule__title'>
          <Title component={'h2'} data={plan.title} />
        </div>

        <div className='schedule__table'>
          <Table data={plan} />
        </div>
      </section>
    );
  }
}

export default Schedule;