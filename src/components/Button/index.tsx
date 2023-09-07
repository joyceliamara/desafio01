import React from "react";
import styles from "./Button.module.css";

export default function Button({ children }: ButtonProps) {
  return <button className={styles.a}>{children}</button>;
}

interface ButtonProps {
  children?: React.ReactNode;
}
