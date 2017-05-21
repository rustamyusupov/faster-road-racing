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

  renderModal(show, description) {
    return (
      <Modal
        contentLabel='Test'
        close={true}
        isOpen={show}
        onRequestClose={this.handleCloseModal}
      >
        <Text>
          {description}
        </Text>
      </Modal>
    )
  }

  renderButton(type) {
    return (
      <Button type='link'
        onClick={this.handleOpenModal}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        {type}
      </Button>
    )
  }

  renderTooltip(tooltip, transcript) {
    return (
      <span className='workout__tooltip'>
        <Tooltip visible={tooltip}>
          {transcript}
        </Tooltip>
      </span>
    )
  }

  renderType(type, workouts) {
    const {
      showModal,
      tooltip,
    } = this.state;
    const transcript = workouts && workouts[type]['transcript'];
    const description = workouts && workouts[type]['description'];

    return (
      <span className='workout__type'>
        {this.renderModal(showModal, description)}
        {this.renderButton(type)}
        {this.renderTooltip(tooltip, transcript)}
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
          {this.renderType(type, workouts)}-{distance}<br/>{description}
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