import React from 'react';
import QuestionItem from './QuestionItem';
import './Question.css';

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <h4 className="question">{this.props.question.text}</h4>
        <div className="question-answers">
          {this.props.question.answers.map((answer, i) => {
            return (
              <QuestionItem
                key={answer}
                value={answer}
                index={i}
                onClick={() => this.props.onSelect(answer)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}