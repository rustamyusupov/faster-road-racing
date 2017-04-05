import React, { Component } from 'react';
import './Table.css';
import Link from '../Link/Link';

class Table extends Component {
  renderHead() {
    const { head } = this.props.data;

    return (
      <thead>
        <tr>
          {head.map((th, idx) => {
            return (
              <th className='th' key={idx}>
                {th}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderCell(item, index) {
    const { type, distance, description } = item;
    const isNotTraining = type === 'Week' || type === 'Total';
    const link = <Link href='#'>{type}</Link>;

    if (isNotTraining) {
      return (distance);
    }

    if (distance) {
      return (
        <span>
          {link}-{distance}<br/>{description}
        </span>
      );
    }

    return (link);
  }

  renderRow(item, index) {
    return (
      <tr key={index}>
        {item.map((td, index) => {
          return (
            <td className='td' key={index}>
              {this.renderCell(td, index)}
            </td>
          );
        })}
      </tr>
    );
  }

  renderBody() {
    const { body } = this.props.data;

    return (
      <tbody>
        {body.map(this.renderRow, this)}
      </tbody>
    );
  }

  render() {
    return (
      <table className='table'>
        {this.renderHead()}
        {this.renderBody()}
      </table>
    );
  }
}

export default Table;