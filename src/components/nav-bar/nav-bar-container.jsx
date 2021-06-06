import { useState } from 'react';
import NavBarView from './nav-bar-view.jsx';

/**
 * NavBar
 * @returns {JSX.Element}
 * @constructor
 */
function NavBar({ newsProviders, changeNewsProvider, changeNewsFeed }) {
  const [isProviderDropdownActive, setIsProviderDropdownActive] = useState(
    false
  );
  const onProviderDropdownClick = (flag) => setIsProviderDropdownActive(!!flag);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const onMobileMenuClick = (flag) => setIsMobileMenuActive(!!flag);

  return (
    <NavBarView
      isProviderDropdownActive={isProviderDropdownActive}
      onProviderDropdownClick={onProviderDropdownClick}
      isMobileMenuActive={isMobileMenuActive}
      onMobileMenuClick={onMobileMenuClick}
      newsProviders={newsProviders}
      changeNewsProvider={changeNewsProvider}
      changeNewsFeed={changeNewsFeed}
    />
  );
}

export default NavBar;
