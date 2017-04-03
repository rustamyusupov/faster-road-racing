import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    const { component } = this.props;
    const Tag = component;

    return (
      <Tag className="title">
        {this.props.text}
      </Tag>
    );
  }
}

export default Title;