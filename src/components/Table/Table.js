import React, { Component } from 'react';
import './Table.css';

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

  renderRow(item, index) {
    return <tr key={index}>

      {item.map((td, idx) => {
        const isNotTraining = td.type === 'Week' || td.type === 'Total';
        const text = isNotTraining ?
          td.distance :
          td.distance ?
            `${td.type}–${td.distance}\n${td.description}` :
            td.type;

        return (
          <td className='td' key={idx}>
            {text}
          </td>
        );
      })}

    </tr>;
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