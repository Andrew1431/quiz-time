import React from 'react';

export default class QuestionItem extends React.Component {
  render() {
    return (
      <div className="question-item" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}