import React, { PureComponent, PropTypes as pt } from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import Button from '../Button/Button';

export default class Modal extends PureComponent {
  static propTypes = {
    children: pt.node,
    contentLabel: pt.string,
    close: pt.bool,
    isOpen: pt.bool,
    onRequestClose: pt.func,
  };

  static defaultProps = {
    close: false,
    isOpen: false,
  };

  render() {
    const {
      children,
      contentLabel,
      close,
      isOpen,
      onRequestClose,
    } = this.props;

    return (
      <ReactModal
        contentLabel={contentLabel}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onRequestClose}
      >
        {close &&
          <Button
            onClick={onRequestClose}
          />
        }

        {children}
      </ReactModal>
    );
  }
}