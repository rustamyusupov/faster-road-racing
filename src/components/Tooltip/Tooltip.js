import React, { PureComponent, PropTypes as pt } from 'react';
import './Tooltip.css';
import cx from 'classnames';

export default class Tooltip extends PureComponent {
  static propTypes = {
    children: pt.node,
    visible: pt.bool,
  };

  static defaultProps = {
    visible: false,
  };

  render() {
    const {
      visible,
      children,
    } = this.props;

    return(
      <div
        className={cx('tooltip', {
          tooltip_state_visible: visible,
        })}
      >
        {children}
      </div>
    );
  }
}