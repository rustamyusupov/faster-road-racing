import React, { Component } from 'react';
import './Title.css';
import cx from 'classnames';

class Title extends Component {
  render() {
    const { component, size, align } = this.props;
    const Tag = component || 'h1';

    return (
      <Tag
        className={cx({
          title: true,
          [`title_size_${size}`]: size,
          [`title_align_${align}`]: align
        })}
      >
        {this.props.data}
      </Tag>
    );
  }
}

export default Title;