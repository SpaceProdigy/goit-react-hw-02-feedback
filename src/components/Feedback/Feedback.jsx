import React from 'react';
import css from './Feedback.module.css';

export const Feedback = ({ children }) => {
  return (
    <section className={css.feedback}>
      <h2 className={css.title}>Please leave feedback</h2>
      {children}
    </section>
  );
};
