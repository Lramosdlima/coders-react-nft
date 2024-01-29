import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.menuContainer}>
        <div className={styles.logo}>Club</div>
        <li>
          <span>Art</span>
          <span>/</span>
        </li>
        <li>
          <span>Community</span>
          <span>/</span>
        </li>
        <li>
          <span>Magazine</span>
          <span>/</span>
        </li>
        <li>
          <span>Shop</span>
        </li>
      </ul>
      <ul className={styles.userInfoContainer}>
        <li>
          <span>S</span>
        </li>
        <li>
          <span>L</span>
          <span>Sign In</span>
        </li>
        <li>
          <span>H</span>
        </li>
      </ul>
    </div>
  );
}
