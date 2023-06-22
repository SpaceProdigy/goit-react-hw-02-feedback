import PropTypes from 'prop-types';
import React from 'react';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ evt }) => {
  return (
    <div className={css.buttonWrapper} onClick={evt}>
      <button name="good" type="button" className={css.button}>
        Good
      </button>
      <button name="neutral" type="button" className={css.button}>
        Neutral
      </button>
      <button name="bad" type="button" className={css.button}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  evt: PropTypes.func.isRequired,
};
