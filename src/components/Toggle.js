import styles from "../styles/toggle.module.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Toggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    // Toggle the language value based on the current state
    const newLanguage = language === "lenape" ? "english" : "lenape";
    setLanguage(newLanguage);
  };

  return (
    <div
      className={`z-50 sticky flex flex-col my-24 pt-8 md:my-16 md:-mb-4 mr-9 items-center ${styles.button}`}
    >
      <label htmlFor="languageToggle" className={styles.toggleLeft}>
        Lenape
      </label>
      <input
        className={styles.toggle}
        id="languageToggle"
        type="checkbox"
        onChange={toggleLanguage}
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
