import React, { PureComponent, PropTypes as pt } from 'react';
import './Workout.css';

import Modal from '../Modal/Modal';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Tooltip from '../Tooltip/Tooltip';

export default class Workout extends PureComponent {
  static propTypes = {
    workouts: pt.object,
    data: pt.object,
  };

  state = {
    tooltip: false,
    showModal: false,
  }

  handleMouseOver = () =>
    this.setState({ tooltip: true });

  handleMouseOut = () =>
    this.setState({ tooltip: false });

  handleOpenModal = () =>
    this.setState({ showModal: true });

  handleCloseModal = () =>
    this.setState({ showModal: false });

  renderType(type, workouts) {
    const {
      showModal,
      tooltip,
    } = this.state;
    const description = workouts && workouts[type];

    return (
      <span className='workout__type'>
        <Modal
          contentLabel='Test'
          close={true}
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
        >
          <Text>
            For most of your long runs we recommend beginning at a conversational pace and gradually increasing your tempo as the run progresses.
          </Text>
        </Modal>

        <Button type='link'
          onClick={this.handleOpenModal}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {type}
        </Button>

        <span className='workout__tooltip'>
          <Tooltip visible={tooltip}>
            {description}
          </Tooltip>
        </span>
      </span>
    );
  }

  render() {
    const {
      type,
      distance,
      description
    } = this.props.data;
    const { workouts } = this.props;
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
        {this.renderType(type, workouts)}
      </span>
    );
  }
}