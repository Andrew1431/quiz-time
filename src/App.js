import React, { Component } from 'react';
import './App.css';

import { Question, Results, Welcome } from './components';

class App extends Component {

  constructor() {
    super();

    this.state = {
      completed: false,
      questionIndex: -1,
      answers: []
    };
  }

  /**
   * Get the current question object based on state's question index.
   */
  getCurrentQuestion = () => {
    return this.props.questions[this.state.questionIndex];
  };

  /**
   * Handle a user's selection of the question's answer.
   */
  onSelect = (answer) => {
    // Push the user's selected answer into the component's state so we can compare at the end.
    const answers = [...this.state.answers, answer];
    this.setState({ answers });

    // Check if there is a next question so we can either show the results screen,
    // or show the next question.
    const hasNextQuestion = this.props.questions.length > this.state.questionIndex + 1;
    if (hasNextQuestion) {
      this.setState({ questionIndex: this.state.questionIndex + 1 });
    } else {
      this.setState({ completed: true });
    }
  };

  /**
   * Start the quiz.
   */
  onStart = () => {
    this.setState({ questionIndex: 0 });
  };

  /**
   * Restart the quiz, resetting the answers and completed status.
   */
  onRestart = () => {
    this.setState({
      questionIndex: 0,
      answers: [],
      completed: false
    });
  };

  render() {
    const { questionIndex, completed } = this.state;

    return (
      <div className="main">
        <div className="card">
          {questionIndex === -1 && (
            <Welcome onStart={this.onStart} />
          )}
          {completed && (
            <Results
              onRestart={this.onRestart}
              answers={this.state.answers}
              questions={this.props.questions}
            />
          )}
          {!completed && questionIndex > -1 && (
            <Question
              onSelect={this.onSelect}
              question={this.getCurrentQuestion()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
