import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Filter</h3>

      <label className={styles.filterOption}>
        <input type="checkbox" /> Mobile
      </label>

      <label className={styles.filterOption}>
        <input type="checkbox" /> Laptop
      </label>

      <label className={styles.filterOption}>
        <input type="checkbox" /> Desktop
      </label>
    </div>
  );
}
