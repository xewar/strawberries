import styles from "../styles/toggle.module.css";
const Toggle = ({ lenape, handleToggle }) => {
  return (
    <div className="flex px-2 lg:px-8 py-8 md:py-0 md:pb-4">
      <label htmlFor="languageToggle" className={styles.toggleLeft}>
        Lenape
      </label>
      <input
        className={styles.toggle}
        id="languageToggle"
        type="checkbox"
        checked={lenape}
        onChange={handleToggle}
      ></input>
      <label className={styles.toggleLabel} htmlFor="languageToggle">
        <span className={styles.toggleButton} />
      </label>
      <label htmlFor="languageToggle" className={styles.toggleRight}>
        English
      </label>
    </div>
  );
};

export default Toggle;
