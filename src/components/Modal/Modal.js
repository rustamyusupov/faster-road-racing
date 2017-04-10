import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import Button from '../Button/Button';

class Modal extends Component {
  render() {
    const {
      contentLabel,
      close,
      isOpen,
      onRequestClose,
      children
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

export default Modal;
