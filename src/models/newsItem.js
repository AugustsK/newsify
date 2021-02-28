/**
 * @typedef {Object} newsItemProps
 * @param {String} title
 * @param {String} link
 * @param {String} pubDate
 * @param {String} fullDate
 * @param {Number} timestamp
 * @param {String} description
 * @param {String} img
 */
const newsItemProps = {
  title: String,
  link: String,
  pubDate: String,
  fullDate: String,
  timestamp: Number,
  description: String,
  img: String,
};

class NewsItem {
  /**
   * @param {...newsItemProps} props
   */
  constructor(props) {
    const classProps = {
      ...newsItemProps,
      ...props,
    };

    this.title = classProps.title;
    this.link = classProps.link;
    this.pubDate = classProps.pubDate;
    this.fullDate = classProps.fullDate;
    this.timestamp = classProps.timestamp;
    this.description = classProps.description;
    this.img = classProps.img;
  }
}

export { newsItemProps, NewsItem };
