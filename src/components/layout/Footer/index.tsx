import styles from './style.module.css';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <p>{t('footer.text')}</p>
        </footer>
    );
}