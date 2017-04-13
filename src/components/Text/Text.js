import React, { PureComponent, PropTypes } from 'react';
import './Text.css';
import cx from 'classnames';

export default class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    component: PropTypes.string,
    color: PropTypes.oneOf([
      'inherit'
    ])
  };

  static defaultProps = {
    component: 'p'
  };

  render() {
    const {
      children,
      component,
      color
    } = this.props;
    const Tag = component;

    return (
      <Tag
        className={cx({
          text: true,
          [`text_color_${color}`]: color
        })}
      >
        {children}
      </Tag>
    );
  }
}