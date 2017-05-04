import React, { PureComponent, PropTypes as pt } from 'react';
import './Table.css';
import Workout from '../Workout/Workout';

export default class Table extends PureComponent {
  static propTypes = {
    type: pt.oneOf([
      'schedule',
    ]),
    abbr: pt.object,
    data: pt.object,
  };

  static defaultProps = {
    type: 'schedule',
  };

  renderHead(head) {
    if (!head) {
      return;
    }

    return (
      <thead>
        <tr>
          {head.map((th, index) => {
            return (
              <th className='table__th' key={index}>
                {th}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderCell(data, index) {
    const {
      type,
      abbr
    } = this.props;

    return (
      <td className='table__td' key={index}>
        {type === 'schedule' ?
          <Workout data={data} abbr={abbr} /> :
          data}
      </td>
    );
  }

  renderRow(tr, index) {
    return (
      <tr key={index}>
        {tr.map(this.renderCell, this)}
      </tr>
    );
  }

  renderBody(body) {
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
    const {
      data
    } = this.props;

    return (
      <table className='table'>
        {this.renderHead(data.head)}
        {this.renderBody(data.body)}
      </table>
    );
  }
}