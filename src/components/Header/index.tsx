import Logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} />
    </header>
  );
}
