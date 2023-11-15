import React from 'react';
import styles from './LogisticsItem.module.css';

interface IProps{
    children: React.ReactNode;
    icon: () => JSX.Element;
}
function LogisticsItem({children, icon} : IProps) {

  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        {icon()}
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;