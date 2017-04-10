import React, { Component } from 'react';
import './Workout.css';
import Button from '../Button/Button';
import Tooltip from '../Tooltip/Tooltip';

class Workout extends Component {
  state = {
    tooltip: false,
  }

  handleMouseOver = () => {
    this.setState({ tooltip: true });
  }

  handleMouseOut = () => {
    this.setState({ tooltip: false });
  }

  renderType(type) {
    const { abbr } = this.props;
    const description = abbr[type] || '';

    return (
      <span className='workout__type'>
        <span 
          className='workout__link'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Button type='link'>
            {type}
          </Button>
        </span>

        <span className='workout__tooltip'>
          <Tooltip visible={this.state.tooltip}>
            {description}
          </Tooltip>
        </span>
      </span>
    );
  }

  render() {
    const { type, distance, description } = this.props.td;
    const isNotTraining = type === 'Week' || type === 'Total';

    if (isNotTraining) {
      return (
        <span className='workout'>
          {distance}
        </span>
      );
    }

    if (distance) {
      return (
        <span className='workout'>
          {this.renderType(type)}-{distance}<br/>{description}
        </span>
      );
    }

    return (
      <span className='workout'>
        {this.renderType(type)}
      </span>
    );
  }
}

export default Workout;