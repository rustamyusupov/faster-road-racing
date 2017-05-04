import React, { PureComponent, PropTypes as pt } from 'react';
import './Title.css';
import cx from 'classnames';

export default class Title extends PureComponent {
  static propTypes = {
    children: pt.node,
    component: pt.string,
    size: pt.string,
    align: pt.string,
  };

  static defaultProps = {
    component: 'p',
  };

  render() {
    const {
      children,
      component,
      size,
      align,
    } = this.props;
      const Tag = component || 'h2';

    return (
      <Tag
        className={cx({
          title: true,
          [`title_size_${size}`]: size,
          [`title_align_${align}`]: align,
        })}
      >
        {children}
      </Tag>
    );
  }
}