import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import { generateColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={styles.item}
              style={{ backgroundColor: generateColor() }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  label: 'no label',
  percentage: 'no percentage',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
