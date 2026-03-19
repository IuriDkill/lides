import style from './style.module.css';
import { useTranslation } from "react-i18next";
import { LinkItem } from '@/components/ui';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BaseItem = {
    title: string;
    subtitle?: string;
    linkUrl: string;
    imageUrl?: string;
};

const Items: BaseItem[] = [
    { title: 'home.linkText1', subtitle: 'home.linkSubtitle1', linkUrl: 'https://lides.com.br', imageUrl: '/images/3.png' },
    { title: 'home.linkText2', subtitle: 'home.linkSubtitle2', linkUrl: 'https://example.com' },
    { title: 'home.linkText3', subtitle: 'home.linkSubtitle3', linkUrl: 'https://example.com' },    
];

const Partners: BaseItem[] = [
    { title: 'home.partner1', linkUrl: 'https://lides.com.br', imageUrl: '/images/3.png' },
    { title: 'home.partner2', linkUrl: 'https://example.com' },
    { title: 'home.partner3', linkUrl: 'https://example.com' },    
];

export default function Home() {
    const { t } = useTranslation();

    const [currentList, setCurrentList] = useState<BaseItem[]>(Items);

    // const handleToggle = () => {
    //     setCurrentList(prev => prev === Items ? Partners : Items);
    // };

    return (
        <div className={style.homeContainer}>
            <div className={style.HomeProfile}>
                <img src="/images/3.png" alt="Logo" className={style.profileImage} />
                <img src="/images/Sem-Título-1.png" alt="Logo" className={style.profileTitle}/>

                <div className={style.radioGroup}>
                    <label
                        className={style.radioOption}
                        onClick={() => setCurrentList(Items)}
                    >
                        <input
                            type="radio"
                            name="listType"
                            checked={currentList === Items}
                            readOnly
                        />

                        <span className={style.labelText}>
                            {t('buttons.home')}
                        </span>

                        {currentList === Items && (
                            <motion.div
                                layoutId="underline"
                                className={style.underline}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </label>

                    <label
                        className={style.radioOption}
                        onClick={() => setCurrentList(Partners)}
                    >
                        <input
                            type="radio"
                            name="listType"
                            checked={currentList === Partners}
                            readOnly
                        />

                        <span className={style.labelText}>
                            {t('buttons.partners')}
                        </span>

                        {currentList === Partners && (
                            <motion.div
                                layoutId="underline"
                                className={style.underline}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </label>
                </div>

                <div className={style.homeItems}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentList === Items ? 'items' : 'partners'}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                width: '100%',
                                alignItems: 'center'
                            }}
                        >
                            {currentList.map((item, index) => (
                                <LinkItem
                                    key={index}
                                    title={t(item.title)}
                                    subtitle={item.subtitle ? t(item.subtitle) : undefined}
                                    linkUrl={item.linkUrl}
                                    ImageUrl={item.imageUrl}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}