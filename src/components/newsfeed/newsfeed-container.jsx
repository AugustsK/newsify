import { useState } from 'react';
import newsFeeds from '../../structures/newsFeeds';
import NewsFeedView from './newsfeed-view.jsx';

function NewsFeed() {
  const [newsProviders, setNewsProviders] = useState(newsFeeds);

  const changeNewsProvider = (index) => {
    const newProviders = [...newsFeeds];

    newProviders.forEach((provider, i) => {
      newProviders[i].current = index === i;
    });

    setNewsProviders(newProviders);
  };

  const newsFeedViewProps = {
    newsProviders,
    changeNewsProvider,
  };

  return <NewsFeedView {...newsFeedViewProps} />;
}

export default NewsFeed;
