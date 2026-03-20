import style from "./style.module.css";

export default function LinkItem({
  ImageUrl,
  linkUrl,
  title,
  subtitle,
  isPartner,
}: {
  ImageUrl?: string;
  linkUrl: string;
  title: string;
  subtitle?: string;
  isPartner?: boolean;
}) {
  return (
    <a
      className={style.container}
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {ImageUrl && (
        <img
          src={ImageUrl}
          alt={title}
          className={isPartner ? style.partnerImage : style.itensImage}
        />
      )}
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </a>
  );
}
