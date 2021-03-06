import NoImageSvg from './images/no-image.svg';
import './grid-item.scss';

function GridItem({ title, link, imgSrc, description, pubDate, fullDate }) {
  return (
    <article
      className="overflow-hidden rounded shadow-lg news-item-card relative"
      role="region"
      aria-label={title}
      key={title}
    >
      <div className="absolute z-10 top-2 right-2 md:top-4 md:right-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          <span className="relative-date">{pubDate}</span>
          <span className="full-date">{fullDate}</span>
        </span>
      </div>
      <a
        href={link}
        className="block overflow-hidden"
        target="_blank"
        title={title}
        rel="noreferrer"
      >
        {imgSrc && (
          <img
            alt=""
            className="block h-auto w-full transform-img"
            src={imgSrc}
            loading="lazy"
            width="16"
            height="9"
          />
        )}
        {!imgSrc && (
          <div className="no-img-wrapper flex items-center justify-center bg-gray-50 h-64">
            <img
              alt=""
              className="block"
              src={NoImageSvg}
              loading="lazy"
              width="56"
              height="56"
            />
          </div>
        )}
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
