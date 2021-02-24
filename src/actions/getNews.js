import axios from 'axios';
import { newsItemProps, NewsItem } from '../models/newsItem';

const getNews = async (url = '/rss/?lang=lv&catid=14') => {
  const response = await axios.get(url);
  const items = [];
  const xml = new window.DOMParser().parseFromString(response.data, 'text/xml');

  xml.querySelectorAll('item').forEach((item) => {
    const props = { ...newsItemProps };
    props.title = item.querySelector('title').innerHTML;
    props.link = item.querySelector('link').innerHTML;
    props.pubDate = item.querySelector('pubDate').innerHTML;
    props.description = item.querySelector('description').innerHTML;
    props.img = item
      .querySelector('enclosure[type="image/jpeg"]')
      .getAttribute('url');

    items.push(new NewsItem(props));
  });

  return items;
};

export default getNews;
