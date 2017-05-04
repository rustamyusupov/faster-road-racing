import React, { PureComponent, PropTypes as pt } from 'react';
import './Link.css';

export default class Link extends PureComponent {
  static propTypes = {
    children: pt.node,
    component: pt.string,
    href: pt.string,
  };

  static defaultProps = {
    component: 'a',
  };

  render() {
    const {
      children,
      component,
      href,
    } = this.props;
    const Tag = component;

    return (
      <Tag className='link' href={href}>
        {children}
      </Tag>
    );
  }
}