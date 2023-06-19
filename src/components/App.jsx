import React, { Component } from 'react';

import css from './Feedback/Feedback.module.css';
import { message, Statistics, FeedbackOptions } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = evt => {
    switch (evt.target.name) {
      case 'good':
        this.setState(state => ({ good: state.good + 1 }));
        break;
      case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;

      case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;

      default:
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <section className={css.feedback}>
        <h2 className={css.title}>Please leave feedback</h2>
        <FeedbackOptions evt={this.feedback} />
        {total < 1 ? (
          <p className={css.message}>{message}</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </section>
    );
  }
}
