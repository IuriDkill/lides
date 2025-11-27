import styles from './style.module.css';
import { Youtube, Instagram, Tiktok, Twitch, Discord } from '@/assets/icons';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/lidesconsultoria/" target="_blank" rel="noopener noreferrer">
                    <Instagram width={35} height={35} />
                </a>
                <a href="https://www.youtube.com/@lidesconsultoria" target="_blank" rel="noopener noreferrer">
                    <Youtube width={35} height={35} />
                </a>
                <a href="https://www.tiktok.com/@lidesconsultoria" target="_blank" rel="noopener noreferrer">
                    <Tiktok width={35} height={35} />
                </a>
                <a href="https://www.twitch.tv/lidesconsultoria" target="_blank" rel="noopener noreferrer">
                    <Twitch width={35} height={35} />
                </a>
                <a href="https://discord.com/invite/lides" target="_blank" rel="noopener noreferrer">
                    <Discord width={35} height={35} />
                </a>
            </div>
        </footer>
    );
}