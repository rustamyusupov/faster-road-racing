import React, { PureComponent } from 'react';
import './Schedule.css';
import Title from '../Title/Title';
import Table from '../Table/Table';
import axios from 'axios';

export default class Schedule extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      abbr: {},
      plan: {},
    };
  }

  componentDidMount() {
    const abbrURL = '/data/abbr.json';
    const planURL = `/data/${this.props.plan}.json`;

    axios.get(abbrURL)
      .then(res => {
        const abbr = res.data;

        this.setState({ abbr });
      });

    axios.get(planURL)
      .then(res => {
        const plan = res.data;

        this.setState({ plan });
      });
  }

  render() {
    const { plan, abbr } = this.state;

    return (
      <section className='schedule'>
        <div className='schedule__title'>
          <Title component={'h2'} data={plan.title} />
        </div>

        <div className='schedule__table'>
          <Table abbr={abbr} data={plan} />
        </div>
      </section>
    );
  }
}