import React from 'react';
import Button from './Button';

export default class Results extends React.Component {
  /**
   * Get the ratio of correct answers as human readable value.
   */
  getScore = () => {
    const { answers, questions } = this.props;
    let total = questions.length;
    let correct = 0;
    questions.forEach((question, i) => {
      if (answers[i] === question.correctAnswer) {
        correct++;
      }
    });
    return `${correct}/${total}`;
  };
  render() {
    return (
      <div>
        <h2 className="results-title">Quiz Completed!</h2>
        <p className="results-description">You got {this.getScore()} questions correct!</p>
        <Button onClick={this.props.onRestart}>Retry</Button>
      </div>
    );
  }
}