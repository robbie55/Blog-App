import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.optionHolder}>
        <span>Some text</span>
      </div>
    </nav>
  );
}
