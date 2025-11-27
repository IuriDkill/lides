import style from './style.module.css';
import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className={style.homeContainer}>
            <h2>{t('pages.notFound.title')}</h2>
        </div>
    );
}