import styles from "../styles/toggle.module.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Toggle = ({ lenape, handleToggle }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    // Toggle the language value based on the current state
    const newLanguage = language === "lenape" ? "english" : "lenape";
    setLanguage(newLanguage);
  };

  return (
    <div className="flex px-2 md:px-4 py-8 md:py-16 md:pb-4">
      <label htmlFor="languageToggle" className={styles.toggleLeft}>
        Lenape
      </label>
      <input
        className={styles.toggle}
        id="languageToggle"
        type="checkbox"
        checked={lenape}
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
