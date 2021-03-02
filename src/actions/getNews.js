import axios from 'axios';
import rssProcessor from '../utils/rss-processor';
import newsFeeds from '../structures/newsFeeds';

const getNews = async (
  feedUrl = newsFeeds[0].feeds[0].url,
  provider = newsFeeds[0].code
) => {
  const url =
    process.env.REACT_APP_BACKEND_ULR ||
    `${window.location.protocol}//${window.location.hostname}:5000/fetch`;
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

  return rssProcessor(xml, provider);
};

export default getNews;
