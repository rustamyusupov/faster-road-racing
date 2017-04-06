import React, { Component } from 'react';
import './Table.css';
import Workout from '../Workout/Workout';

class Table extends Component {
  renderHead() {
    const { head } = this.props.data;

    if (!head) {
      return;
    }

    return (
      <thead>
        <tr>
          {head.map((th, idx) => {
            return (
              <th className='table__th' key={idx}>
                {th}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderRow(tr, index) {
    const { type, abbr } = this.props;

    return (
      <tr key={index}>
        {tr.map((td, index) => {
          return (
            <td className='table__td' key={index}>
              {type === 'schedule' ?
                <Workout td={td} abbr={abbr} index={index} /> :
                td}
            </td>
          );
        })}
      </tr>
    );
  }

  renderBody() {
    const { body } = this.props.data;

    if (!body) {
      return;
    }

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