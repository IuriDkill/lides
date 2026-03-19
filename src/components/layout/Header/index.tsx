import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'pt-BR' | 'en') => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.langSelector}>
        
        <button
          onClick={() => changeLanguage('pt-BR')}
          className={`${styles.langButton} ${currentLang === 'pt-BR' ? styles.active : ''}`}
        >
          🇧🇷
        </button>

        <button
          onClick={() => changeLanguage('en')}
          className={`${styles.langButton} ${currentLang === 'en' ? styles.active : ''}`}
        >
          🇺🇸
        </button>

      </div>
    </div>
  );
}