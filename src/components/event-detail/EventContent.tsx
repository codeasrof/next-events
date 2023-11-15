import React from 'react';
import styles from './EventContent.module.css';

interface IProps{
    children: React.ReactNode
}

function EventContent({children} : IProps) {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
}

export default EventContent;