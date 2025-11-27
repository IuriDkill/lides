import style from './style.module.css';

export default function LinkItem({ ImageUrl, linkUrl, title, subtitle }: { ImageUrl?: string; linkUrl: string; title: string; subtitle?: string }) {
    return (
        <div className={style.container} onClick={() => window.open(linkUrl, '_blank')}>
            {ImageUrl && <img src={ImageUrl} alt={title} />}
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
}