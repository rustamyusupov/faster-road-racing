import React, { Component } from 'react';
import './Button.css';
import cx from 'classnames';

class Button extends Component {
  render() {
    const { children, type, onClick } = this.props;
 
    return (
      <button
        className={cx({
          button: true,
          [`button_type_${type}`]: type
        })}
        type='button'
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;