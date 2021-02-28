import NewsContent from '../news-content';
import NavBar from '../nav-bar';
import Loader from '../loader';
import Error from '../error';

function AppView({
  newsProviders,
  changeNewsProvider,
  changeNewsFeed,
  isLoading,
  error,
  data,
}) {
  const navBarProps = { newsProviders, changeNewsProvider, changeNewsFeed };
  return (
    <>
      <NavBar {...navBarProps} />
      <div className="p-4 md:p-12">
        {isLoading && <Loader />}
        {error && <Error message={error.message} />}
        {data && !isLoading && !error && <NewsContent data={data} />}
      </div>
    </>
  );
}

export default AppView;
