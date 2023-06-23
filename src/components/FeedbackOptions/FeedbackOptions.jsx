import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonWrapper} onClick={onLeaveFeedback}>
      {options.map(e => (
        <button name={e} type="button" className={css.button} key={nanoid(5)}>
          {e[0].toUpperCase() + e.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
