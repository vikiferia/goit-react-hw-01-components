import React from 'react';
import PropTypes from 'prop-types';
import FrendListItem from './FriendListItem'
import styles from './friendList.module.css';


const FriendList = ({friends}) => (
    <ul className={styles.friend_list}>
        {friends.map(friend => 
          <FrendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
  )}
</ul>
)

FriendList.propTypes = {  
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  
};

export default FriendList 