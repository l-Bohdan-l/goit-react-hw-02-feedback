import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.scss';

export const FriendsList = ({ friends }) => {
  return (
    <section className={styles.friends}>
      <ul className={styles.friendsList}>
        {friends.map(friend => {
          const { isOnline, avatar, name, id } = friend;
          return (
            <li key={id} className={styles.item}>
              <span
                className={
                  isOnline === true ? styles.statusOnline : styles.statusOffline
                }
              ></span>
              <img
                className={styles.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={styles.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendsList.defaultProps = {
  name: 'Friend name',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
};

FriendsList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
