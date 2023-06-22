import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.textWrapper}>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
      </div>
      <div className={css.statsWrapper}>
        <p className={css.text}>Total: {total}</p>
        <p className={css.text}>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
