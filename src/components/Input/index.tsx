import { ChangeEvent } from "react";
import styles from "./Input.module.css";

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <input className={styles.input} placeholder={placeholder} {...props} />
  );
}

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
