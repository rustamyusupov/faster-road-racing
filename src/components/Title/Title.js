import React, { Component } from 'react';
import cx from 'classnames';
import './Title.css';

class Title extends Component {
  render() {
    const {
      component,
      size
    } = this.props;
    const Tag = component || 'h1';

    return (
      <Tag
        className={cx({
          title: true,
          [`title_size_${size}`]: size
        })}
      >
        {this.props.data}
      </Tag>
    );
  }
}

export default Title;