import React from 'react';
import styles from '../styles/list-item.css';

function ListItem(props) {
  return (
    <div className={styles.item}>
      <span className={styles.link}>{props.text}</span>
    </div>
  )
}

export default ListItem;