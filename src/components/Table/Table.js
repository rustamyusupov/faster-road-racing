import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  renderHead() {
    const { head } = this.props.data;

    return (
      <thead>
        <tr>{
          head.map((th, idx) => {
            return <th key={idx}>{th}</th>;
          })
        }</tr>
      </thead>
    );
  }

  renderBody() {
    const { body } = this.props.data;

    return (
      <tbody>{
        body.map((tr, idx) => {
          return <tr key={idx}>{
            tr.map((td, idx) => {
              return <td key={idx}>{td}</td>;
            })
          }</tr>;
        })
      }</tbody>
    );
  }

  render() {
    return (
      <table className="Table">
        {this.renderHead()}
        {this.renderBody()}
      </table>
    );
  }
}

export default Table;