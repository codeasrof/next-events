import React from 'react';
import styles from "./ErrorAlert.module.css"

interface IProps{
    children: React.ReactNode
}
function ErrorAlert({children} : IProps) {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;