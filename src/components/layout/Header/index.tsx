import styles from './style.module.css';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();


  return (
    <div className={styles.headerContainer}>
      <h1>{t('header.title')}</h1>
      <p>{t('header.subtitle')}</p>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}