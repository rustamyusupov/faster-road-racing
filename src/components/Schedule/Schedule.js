import React, { PureComponent } from 'react';
import './Schedule.css';
import Title from '../Title/Title';
import Table from '../Table/Table';
import axios from 'axios';

export default class Schedule extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      workouts: {},
      plan: {},
    };
  }

  componentDidMount() {
    const workoutsURL = '/data/workouts.json';
    const planURL = `/data/${this.props.plan}.json`;

    axios.get(workoutsURL)
      .then(res => {
        const workouts = res.data;

        this.setState({ workouts });
      });

    axios.get(planURL)
      .then(res => {
        const plan = res.data;

        this.setState({ plan });
      });
  }

  render() {
    const { plan, workouts } = this.state;

    return (
      <section className='schedule'>
        <div className='schedule__title'>
          <Title component={'h2'} data={plan.title} />
        </div>

        <div className='schedule__table'>
          <Table workouts={workouts} data={plan} />
        </div>
      </section>
    );
  }
}