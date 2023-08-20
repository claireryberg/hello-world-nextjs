import Link from "next/link";
import "./Card.scss";

export const Card = ({ slug, title, description, date }) => {
  return (
    <Link className="card" href={slug}>
      <strong className="card__title">{title}</strong>
      <div className="card__description">{description}</div>
      <div className="card__footer">
        <div className="card__date">{date}</div>
        <div className="card__read-more">Read more...</div>
      </div>
    </Link>
  );
};
