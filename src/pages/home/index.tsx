import style from './style.module.css';
import { useTranslation } from "react-i18next";
import { LinkItem } from '@/components/ui';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BaseItem = {
    key: string;
    linkUrl: string;
    imageUrl?: string;
};

const Items: BaseItem[] = [
    { key: 'item1', linkUrl: 'https://pt.aliexpress.com/item/1005005557220339.html?gatewayAdapt=glo2bra', imageUrl: 'https://www.maxgaming.com/img/bilder/artiklar/27569.jpg?m=1688027848&w=720' },
    { key: 'item2', linkUrl: 'https://www.amazon.com.br/stores/page/BF138B1D-551A-40D7-A3DC-FD531DAEF92D', imageUrl: 'http://soundium.com/cdn/shop/files/01_133525.jpg?v=1750851586' },
    { key: 'item3', linkUrl: 'https://www.mercadolivre.com.br/havit-audio-hvtws-tw982-tw982-branco-1/p/MLB44610251', imageUrl: "https://ccimg1.canadacomputers.com/Products/452x452/1563/1751/257518/78902.jpg" },
    { key: 'item4', linkUrl: 'https://www.mercadolivre.com.br/headphone-gamer-havit-h630bt-bluetooth-53-on-ear-3d-55h-cor-preto/p/MLB25967798', imageUrl: 'https://havitsmart.com/cdn/shop/files/havit-wireless-headphones-h630bt-noise-cancellinghavit-business-929254.jpg?v=1749802184' },
    { key: 'item5', linkUrl: 'https://s.click.aliexpress.com/e/_mroIODF', imageUrl: 'https://ae01.alicdn.com/kf/S39f8af99ad9e44388f8a272c66df15c3Z.jpg' },
    { key: 'item6', linkUrl: 'https://s.click.aliexpress.com/e/_mrPOSfF', imageUrl: 'http://shop.8bitdo.com/cdn/shop/files/15_af987f33-5c15-4af7-b739-201f99ebf444.jpg?v=1743414879' },
    { key: 'item7', linkUrl: 'https://youtu.be/oWu7Nu3TmJ4', imageUrl: "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/monitor-gamer-taurus-pro-bm24ffad1gw-238-ips-full-hd-180hz-1ms-10-bits-srgb-110-ajuste-de-altura-vesa-dp-hdm-bluecase/smartchoicetech/blebm24ffad1gw/fead9aefc263dd736f4eb0dc33e447c1.jpeg" },
    { key: 'item8', linkUrl: 'https://dada.link/140Wzk', imageUrl: "https://havitsmart.com/cdn/shop/files/havit-gaming-headphones-h2002cu-usb-71havit-business-149001.jpg?v=1749802168" },
    { key: 'item9', linkUrl: 'https://www.amazon.com.br/Fuxi-H7-White-Black-Destacável-Cancelamento/dp/B0DMSKLY91', imageUrl: "https://havitsmart.com/cdn/shop/files/havit-gaming-headphones-fuxi-h7-five-modehavit-business-413638.jpg?v=1749802079" },
    { key: 'item10', linkUrl: 'https://s.click.aliexpress.com/e/_oFmLOlz', imageUrl: "https://saruk-web-images.s3.eu-north-1.amazonaws.com/Vevshao%20A15%20Smart%20Mini%20Projector%20260ANSI%20Lumens%20Portable%20Android%2013%20Projector%20Dual%20WiFi%20Auto%20Keystone%20Focus%20Pocket%20Beamer%20Home%20Meeting%20Video%20Cinema.jpg" },
    { key: 'item11', linkUrl: 'https://s.click.aliexpress.com/e/_opXPmxD', imageUrl: "https://www.maxgaming.com/bilder/artiklar/zoom/31674_4.jpg?m=1754318605" },
    { key: 'item12', linkUrl: 'https://s.click.aliexpress.com/e/_oF65OJp', imageUrl: "https://us.maxgaming.com/bilder/artiklar/23057.jpg?m=1671030665" },
    { key: 'item13', linkUrl: 'https://s.click.aliexpress.com/e/_oC9KHAF', imageUrl: "http://simpletechnic.com/cdn/shop/files/FifineX3.png?v=1740162745" },
    { key: 'item14', linkUrl: 'https://dada.link/Y12Alq', imageUrl: "https://havitsmart.com/cdn/shop/files/havit-wireless-earbuds-tw958-pro-basshavit-business-317127.jpg?v=1749802232" }
];

const Partners: BaseItem[] = [
    { key: 'partner1', linkUrl: 'https://www.golbox.club/', imageUrl: "http://www.mysteryfootball.co.uk/cdn/shop/files/new_main_image.png?v=1744221946" },
    { key: 'partner2', linkUrl: 'https://simulador.panthus.com.br', imageUrl: "https://cdn.footballkitarchive.com/2024/12/03/cnmF5dZhtc0q0Il-small.jpg" },
    { key: 'partner3', linkUrl: 'https://br.topps.com/', imageUrl: "https://i.ebayimg.com/images/g/UMgAAOSw4GBk9xuS/s-l1200.jpg" }
];



export default function Home() {
    const { t } = useTranslation();
    const [currentList, setCurrentList] = useState<BaseItem[]>(Items);


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
                                    title={t(
                                        currentList === Items
                                            ? `items.${item.key}.title`
                                            : `partners.${item.key}.title`
                                    )}
                                    subtitle={t(
                                        currentList === Items
                                            ? `items.${item.key}.subtitle`
                                            : `partners.${item.key}.subtitle`
                                    )}
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