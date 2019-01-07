import React from 'react';
import './QuestionItem.css';

export default class QuestionItem extends React.Component {
  getLetter = () => {
    return 'abcdefghijklmnopqrstuvwxyz'[this.props.index].toUpperCase();
  };
  render() {
    return (
      <div className="question-item" onClick={this.props.onClick}>
        <div className="question-item-letter">{this.getLetter()})</div>
        <div className="question-item-value">
          {this.props.value}
        </div>
      </div>
    );
  }
}