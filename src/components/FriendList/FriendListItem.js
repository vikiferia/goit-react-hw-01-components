import React from 'react';
import styles from './friendList.module.css';

const FrendListItem = ({id, isOnline, avatar, name }) => (
    <li className={styles.item} key={id}>
    <span className={
            isOnline ? styles.statusOnline : styles.statusOffline
          }>{ isOnline}</span>
    <img className={styles.avatar}  src={ avatar} alt="" width="48" />
    <p className={styles.name}>{ name}</p>
</li> 
)

export default FrendListItem;