import styles from "./Badge.module.css";

export default function Badge({ quantity }: BadgeProps) {
  return <span className={styles.wrapper}>{quantity}</span>;
}

interface BadgeProps {
  quantity: number;
}
