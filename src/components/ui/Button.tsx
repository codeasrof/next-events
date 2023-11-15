import Link from "next/link";
import React from "react";
import styles from "./Button.module.css"

interface IProps{
    children: React.ReactNode;
    link?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({children, link, onClick} : IProps) {
  if(link){
    return (
      <Link href={link} className={styles.btn}>
          {children}
      </Link>
    )
  }else{
    return(
      <button onClick={onClick}>{children}</button>
    )
  }
}
