import style from './style.module.css';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

export default function Home() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <div className={style.homeContainer}>
            <h2>{t('home.welcomeMessage')}</h2>
            <p>Current Path: {location.pathname}</p>
        </div>
    );
}