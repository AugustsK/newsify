import './nav-bar.scss';
import Logo from './images/logo.svg';

/**
 * @typedef NewsProviderObject
 * {{
 *     title: String,
 *     current: Boolean,
 *     feeds: Array
 * }}
 */

/**
 * @param {Function} onMobileMenuClick
 * @param {Boolean} isMobileMenuActive
 * @param {Function} onProviderDropdownClick
 * @param {Boolean} isProviderDropdownActive
 * @param {[].<NewsProviderObject>} newsProviders
 * @param {Function} changeNewsProvider
 * @param {Function} changeNewsFeed
 * @returns {JSX.Element}
 * @constructor
 */
function NavBarView({
  onMobileMenuClick,
  isMobileMenuActive,
  onProviderDropdownClick,
  isProviderDropdownActive,
  newsProviders,
  changeNewsProvider,
  changeNewsFeed,
}) {
  const currentProviderIndex = newsProviders.findIndex(
    (provider) => provider.current
  );
  /**
   * @type {NewsProviderObject}
   */
  const currentProvider = newsProviders[currentProviderIndex];

  return (
    <nav className="bg-gray-800 fixed w-full z-30 shadow-md">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuActive}
              onClick={() => {
                onProviderDropdownClick(false);
                onMobileMenuClick(!isMobileMenuActive);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <div
                className={`hamburger hamburger--spring js-hamburger ${
                  isMobileMenuActive ? 'is-active' : ''
                }`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="logo-svg"
                src={Logo}
                alt=""
                width="36"
                height="36"
              />
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                {currentProvider.feeds.map((feed, index) => (
                  <button
                    key={`news-feed--${index}`}
                    type="button"
                    className={`${
                      feed.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeNewsFeed(currentProviderIndex, index);
                    }}
                  >
                    {feed.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden absolute z-10 inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  className="text-gray-300 text-sm font-medium bg-gray-800 flex text-sm rounded-full focus:outline-none focus:underline"
                  id="user-menu-btn"
                  aria-controls="user-menu"
                  aria-expanded={isProviderDropdownActive}
                  onClick={() => {
                    onMobileMenuClick(false);
                    onProviderDropdownClick(!isProviderDropdownActive);
                  }}
                >
                  Ziņu avots
                </button>
              </div>
              <div
                className={`${
                  isProviderDropdownActive ? '' : 'hidden'
                } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
                role="menu"
                id="user-menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-btn"
              >
                {newsProviders.map((provider, index) => (
                  <button
                    type="button"
                    key={`news-provider--${index}`}
                    className={`block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 ${
                      provider.current ? 'font-bold' : ''
                    }`}
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      changeNewsProvider(index);
                      onProviderDropdownClick(false);
                    }}
                  >
                    {provider.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${isMobileMenuActive ? '' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {currentProvider.feeds.map((feed, index) => (
            <button
              key={`news-feed-mobile--${index}`}
              type="button"
              className={`${
                feed.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } block w-full px-3 py-2 rounded-md text-sm font-medium`}
              onClick={(e) => {
                e.preventDefault();
                changeNewsFeed(currentProviderIndex, index);
                onMobileMenuClick(false);
              }}
            >
              {feed.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBarView;
