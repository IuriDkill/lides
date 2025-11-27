import style from './style.module.css';
import { useTranslation } from "react-i18next";

import { LinkItem } from '@/components/ui';

const Items = [
    { title: 'home.linkText1', subtitle: 'home.linkSubtitle1', linkUrl: 'https://lides.com.br', imageUrl: '/images/3.png' },
    { title: 'home.linkText2', subtitle: 'home.linkSubtitle2', linkUrl: 'https://example.com' },
    { title: 'home.linkText3', subtitle: 'home.linkSubtitle3', linkUrl: 'https://example.com' },    
];

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className={style.homeContainer}>
            <div className={style.HomeProfile}>
                <img src="/images/3.png" alt="Logo" className={style.profileImage} />
                <img src="/images/Sem-Título-1.png" alt="Logo" className={style.profileTitle}/>

                <div className={style.homeItems}>
                    {Items.map((item, index) => (
                        <LinkItem key={index} title={t(item.title)} subtitle={t(item.subtitle)} linkUrl={item.linkUrl} ImageUrl={item.imageUrl} />
                    ))}
                </div>

            </div>
        </div>
    );
}