import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

export const Notification = ({ notification }) => {
  return <p className={styles.notification}> {notification} </p>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
