import NewsContent from '../news-content';
import NavBar from '../nav-bar';

function NewsFeedView({ newsProviders, changeNewsProvider }) {
  const navBarProps = { newsProviders, changeNewsProvider };
  return (
    <>
      <NavBar {...navBarProps} />
      <div className="p-4 md:p-12">
        <NewsContent />
      </div>
    </>
  );
}

export default NewsFeedView;
