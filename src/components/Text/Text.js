import React, { PureComponent, PropTypes as pt } from 'react';
import './Text.css';
import cx from 'classnames';

export default class Text extends PureComponent {
  static propTypes = {
    children: pt.node,
    component: pt.string,
    color: pt.oneOf([
      'inherit',
    ]),
  };

  static defaultProps = {
    component: 'p',
  };

  render() {
    const {
      children,
      component,
      color,
    } = this.props;
    const Tag = component;

    return (
      <Tag
        className={cx({
          text: true,
          [`text_color_${color}`]: color,
        })}
      >
        {children}
      </Tag>
    );
  }
}