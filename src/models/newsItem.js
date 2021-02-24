/**
 * @typedef {Object} newsItemProps
 * @param {String} title
 * @param {String} link
 * @param {String} pubDate
 * @param {String} description
 * @param {String} img
 */
const newsItemProps = {
  title: String,
  link: String,
  pubDate: String,
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
    this.description = classProps.description;
    this.img = classProps.img;
  }
}

export { newsItemProps, NewsItem };
