import React from 'react';
import Button from './Button';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome to Quiz Time!</h1>
        <Button onClick={this.props.onStart}>Get Started!</Button>
      </div>
    );
  }
}