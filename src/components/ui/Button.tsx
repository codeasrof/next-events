import Link from "next/link";
import React from "react";
import styles from "./Button.module.css"

interface IProps{
    children: React.ReactNode,
    link: string
}

export default function Button({children, link} : IProps) {
  return (
    <Link href={link} className={styles.btn}>
        {children}
    </Link>
  )
}
