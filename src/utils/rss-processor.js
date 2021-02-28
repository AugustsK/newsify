import { parse, formatDistanceToNow, addHours, format } from 'date-fns';
import { lv } from 'date-fns/locale';
import decodeHtml from './decode-html';
import { NewsItem, newsItemProps } from '../models/newsItem';

const getImage = (xmlItem) => {
  let imgNode = xmlItem.querySelector('enclosure[type="image/jpeg"]');

  if (!imgNode) {
    [imgNode] = xmlItem.getElementsByTagName('media:content');
  }

  if (imgNode) {
    return imgNode.getAttribute('url');
  }

  return null;
};

const getPubDate = (xmlItem, adjustTime) => {
  const pubDateRaw = xmlItem.querySelector('pubDate').innerHTML;
  const strippedDate = pubDateRaw.split(', ')[1];
  const date = parse(strippedDate, 'dd LLL yyyy HH:mm:ss xx', new Date(), {
    weekStartsOn: 1,
  });
  const adjustedDate = addHours(date, adjustTime ? 2 : 0);
  const fullDate = format(adjustedDate, "do MMMM 'plkst.' HH:mm", {
    locale: lv,
    weekStartsOn: 1,
  });
  const relativeDate = formatDistanceToNow(adjustedDate, {
    locale: lv,
    addSuffix: true,
  });
  const timestamp = format(adjustedDate, 'T');
  return { fullDate, relativeDate, timestamp };
};

const process = (xml, provider) => {
  const items = [];

  xml.querySelectorAll('item').forEach((item) => {
    /**
     * @type {newsItemProps} props
     */
    const props = { ...newsItemProps };
    props.title = decodeHtml(item.querySelector('title').innerHTML);
    props.link = item.querySelector('link').innerHTML;
    const { fullDate, relativeDate, timestamp } = getPubDate(item, provider === 'lsm');
    props.pubDate = relativeDate;
    props.fullDate = fullDate;
    props.timestamp = timestamp;
    props.description = decodeHtml(item.querySelector('description').innerHTML);
    props.img = getImage(item);

    items.push(new NewsItem(props));
  });

  items.sort((a, b) => {
    if (a.timestamp < b.timestamp) return 1;
    if (a.timestamp > b.timestamp) return -1;
    return 0;
  });

  return items;
};

export default process;
