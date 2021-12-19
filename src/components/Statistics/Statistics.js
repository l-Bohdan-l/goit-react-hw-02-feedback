import { Notification } from '../Notifications/Notification';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const totalFeedback = total();
  const positivePercentageValue = positivePercentage();
  return (
    <div>
      {!!totalFeedback ? (
        <ul className={styles.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentageValue} %</li>
        </ul>
      ) : (
        <Notification notification={'There is no feedback'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
