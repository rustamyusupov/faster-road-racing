import React, { Component } from 'react';
import './Table.css';
import Workout from '../Workout/Workout';

class Table extends Component {
  renderHead() {
    const { head } = this.props.data;

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
    return (
      <tr key={index}>
        {tr.map((td, index) => {
          return (
            <td className='table__td' key={index}>
              <Workout td={td} index={index} />
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