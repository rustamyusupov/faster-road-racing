import React, { PureComponent, PropTypes as pt } from 'react';
import './Button.css';
import cx from 'classnames';

export default class Button extends PureComponent {
  static propTypes = {
    children: pt.node,
    component: pt.string,
    type: pt.oneOf([
      'link'
    ]),
    onClick: pt.func,
    onMouseOver: pt.func,
    onMouseOut: pt.func,
  };

  static defaultProps = {
    component: 'button',
  };

  render() {
    const {
      children,
      component,
      type,
      onClick,
      onMouseOver,
      onMouseOut
    } = this.props;
    const Tag = component;

    return (
      <Tag
        className={cx({
          button: true,
          [`button_type_${type}`]: type
        })}
        type='button'
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {children}
      </Tag>
    );
  }
}