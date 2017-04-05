import React, { Component } from 'react';
import './Tooltip.css';
import cx from 'classnames';

class Tooltip extends Component {
  render() {
    const { visible, children } = this.props;

    return(
      <div
        className={cx('tooltip', {
          tooltip_state_visible: visible
        })}
      >
        {children}
      </div>
    );
  }
}

export default Tooltip;