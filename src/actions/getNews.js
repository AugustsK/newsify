import axios from 'axios';
import process from '../utils/rss-processor';
import newsFeeds from '../structures/newsFeeds';

const getNews = async (
  feedUrl = newsFeeds[0].feeds[0].url,
  provider = newsFeeds[0].code
) => {
  const url = `${window.location.protocol}//${window.location.hostname}:5000/backend`;
  const response = await axios.post(
    url,
    {
      feed: encodeURIComponent(feedUrl),
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization, XMLHttpRequest',
      },
    }
  );

  const xml = new window.DOMParser().parseFromString(response.data, 'text/xml');

  return process(xml, provider);
};

export default getNews;
