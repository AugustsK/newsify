import './grid-item.scss';

function GridItem({ title, link, imgSrc, description, pubDate, fullDate }) {
  return (
    <article
      className="overflow-hidden rounded shadow-lg news-item-card relative"
      key={title}
    >
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          <span className="relative-date">{pubDate}</span>
          <span className="full-date">{fullDate}</span>
        </span>
      </div>
      <a
        href={link}
        className="block overflow-hidden"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          className="block h-auto w-full transform-img"
          src={imgSrc}
          loading="lazy"
          width="16"
          height="9"
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:underline">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </article>
  );
}

export default GridItem;
