import style from "./style.module.css";
import { useTranslation } from "react-i18next";
import { LinkItem } from "@/components/ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BaseItem = {
  key: string;
  linkUrl: string;
  imageUrl?: string;
};

const Items: BaseItem[] = [
  {
    key: "item3",
    linkUrl: "https://bit.ly/4d2x0E2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSNdyR0duuykbMCQOgPIdYhCFJfqpfvCXOw&s",
  },
  {
    key: "item1",
    linkUrl:
      "https://pt.aliexpress.com/item/1005005557220339.html?gatewayAdapt=glo2bra",
    imageUrl:
      "https://www.maxgaming.com/img/bilder/artiklar/27569.jpg?m=1688027848&w=720",
  },
  {
    key: "item2",
    linkUrl:
      "https://www.amazon.com.br/stores/page/BF138B1D-551A-40D7-A3DC-FD531DAEF92D",
    imageUrl:
      "https://m.media-amazon.com/images/I/61qUoO7imuL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg ",
  },
  {
    key: "item4",
    linkUrl:
      "https://www.mercadolivre.com.br/headphone-gamer-havit-h630bt-bluetooth-53-on-ear-3d-55h-cor-preto/p/MLB25967798",
    imageUrl:
      "https://havitsmart.com/cdn/shop/files/havit-wireless-headphones-h630bt-noise-cancellinghavit-business-929254.jpg?v=1749802184",
  },
  {
    key: "item5",
    linkUrl: "https://s.click.aliexpress.com/e/_mroIODF",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc5e5e720381a4b1fa2e3cd0ac654ae98t.jpg_480x480q75.jpg_.avif",
  },
  {
    key: "item6",
    linkUrl: "https://s.click.aliexpress.com/e/_mrPOSfF",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/S52229e1a36ac488cb280bb57716a0eb9x.png_960x960.png_.avif",
  },
  //   {
  //     key: "item7",
  //     linkUrl: "https://youtu.be/oWu7Nu3TmJ4",
  //     imageUrl:
  //       "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/monitor-gamer-taurus-pro-bm24ffad1gw-238-ips-full-hd-180hz-1ms-10-bits-srgb-110-ajuste-de-altura-vesa-dp-hdm-bluecase/smartchoicetech/blebm24ffad1gw/fead9aefc263dd736f4eb0dc33e447c1.jpeg",
  //   },
  {
    key: "item8",
    linkUrl: "https://dada.link/140Wzk",
    imageUrl:
      "https://havitsmart.com/cdn/shop/files/havit-gaming-headphones-h2002cu-usb-71havit-business-149001.jpg?v=1749802168",
  },
  {
    key: "item9",
    linkUrl:
      "https://www.amazon.com.br/Fuxi-H7-White-Black-Destacável-Cancelamento/dp/B0DMSKLY91",
    imageUrl:
      "https://havitsmart.com/cdn/shop/files/havit-gaming-headphones-fuxi-h7-five-modehavit-business-413638.jpg?v=1749802079",
  },
  {
    key: "item10",
    linkUrl: "https://s.click.aliexpress.com/e/_oFmLOlz",
    imageUrl: "https://m.media-amazon.com/images/I/41cmR9FB-6L.jpg",
  },
  {
    key: "item11",
    linkUrl: "https://s.click.aliexpress.com/e/_opXPmxD",
    imageUrl: "https://m.media-amazon.com/images/I/81nLaAZKKrL.jpg",
  },
  {
    key: "item12",
    linkUrl: "https://s.click.aliexpress.com/e/_oF65OJp",
    imageUrl: "https://m.media-amazon.com/images/I/71k6li+9vFL.jpg",
  },
  {
    key: "item13",
    linkUrl: "https://s.click.aliexpress.com/e/_oC9KHAF",
    imageUrl:
      "http://simpletechnic.com/cdn/shop/files/FifineX3.png?v=1740162745",
  },
  {
    key: "item14",
    linkUrl: "https://dada.link/Y12Alq",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_969510-MLB88831370517_072025-F.webp",
  },
];

const Partners: BaseItem[] = [
  {
    key: "partner4",
    linkUrl: "https://www.comfy.com.br/",
    imageUrl: "https://raichu-uploads.s3.amazonaws.com/logo_comfy_BK3YTR.png",
  },
  {
    key: "partner1",
    linkUrl: "https://www.golbox.club/",
    imageUrl:
      "https://www.golbox.club/cdn/shop/files/823_6.webp?v=1724189209&width=100",
  },
  {
    key: "partner2",
    linkUrl: "https://simulador.panthus.com.br",
    imageUrl: "https://simulador.panthus.com.br/img/logo.png",
  },
  {
    key: "partner3",
    linkUrl: "https://br.topps.com/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Topps_Logo.svg",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [currentList, setCurrentList] = useState<BaseItem[]>(Items);

  return (
    <div className={style.homeContainer}>
      <div className={style.HomeProfile}>
        <img src="/images/3.png" alt="Logo" className={style.profileImage} />
        <img
          src="/images/Sem-Título-1.png"
          alt="Logo"
          className={style.profileTitle}
        />

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

            <span className={style.labelText}>{t("buttons.home")}</span>

            {currentList === Items && (
              <motion.div
                layoutId="underline"
                className={style.underline}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
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

            <span className={style.labelText}>{t("buttons.partners")}</span>

            {currentList === Partners && (
              <motion.div
                layoutId="underline"
                className={style.underline}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </label>
        </div>

        <div className={style.homeItems}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentList === Items ? "items" : "partners"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%",
                alignItems: "center",
              }}
            >
              {currentList.map((item, index) => (
                <LinkItem
                  key={index}
                  title={t(
                    currentList === Items
                      ? `items.${item.key}.title`
                      : `partners.${item.key}.title`,
                  )}
                  subtitle={t(
                    currentList === Items
                      ? `items.${item.key}.subtitle`
                      : `partners.${item.key}.subtitle`,
                  )}
                  linkUrl={item.linkUrl}
                  ImageUrl={item.imageUrl}
                  isPartner={currentList === Partners}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
