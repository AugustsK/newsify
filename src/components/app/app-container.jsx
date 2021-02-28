import { useState, useEffect } from 'react';
import { useAsync } from 'react-async';
import getNews from '../../actions/getNews';
import newsFeeds from '../../structures/newsFeeds';
import AppView from './app-view.jsx';

let feedUrl = newsFeeds[0].feeds[0].url;
let providerCode = newsFeeds[0].code;
const loadNews = async () => getNews(feedUrl, providerCode);

const updateFeedUrl = (updatedProviders) => {
  const currentProvider = updatedProviders?.find(
    (provider) => provider.current
  );
  const currentFeed = currentProvider?.feeds.find((feed) => feed.current);

  feedUrl = currentFeed?.url || feedUrl;
  providerCode = currentProvider?.code || providerCode;

  return feedUrl;
};

function AppContainer() {
  const [newsProviders, setNewsProviders] = useState(newsFeeds);

  const changeNewsProvider = (index) => {
    const newProviders = [...newsFeeds];

    newProviders.forEach((provider, i) => {
      newProviders[i].current = index === i;
    });

    setNewsProviders(newProviders);
  };

  const changeNewsFeed = (providerIndex, feedIndex) => {
    const newProviders = [...newsFeeds];

    newProviders[providerIndex].feeds.forEach((feed, i) => {
      newProviders[providerIndex].feeds[i].current = feedIndex === i;
    });

    setNewsProviders(newProviders);
  };

  const reloadNews = async () =>
    getNews(updateFeedUrl(newsProviders), providerCode);

  const { data, error, isLoading, run } = useAsync({
    promiseFn: loadNews,
    deferFn: reloadNews,
  });

  useEffect(() => {
    if (feedUrl !== updateFeedUrl(newsProviders)) {
      run();
    }
  }, [newsProviders, run]);

  const newsFeedViewProps = {
    newsProviders,
    changeNewsProvider,
    changeNewsFeed,
    isLoading,
    error,
    data,
  };

  return <AppView {...newsFeedViewProps} />;
}

export default AppContainer;
