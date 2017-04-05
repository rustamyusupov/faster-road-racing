import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  render() {
    const { href, children } = this.props;
 
    return (
      <a className='link' href={href}>
        {children}
      </a>
    );
  }
}

export default Link;