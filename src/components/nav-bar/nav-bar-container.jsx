import { useState } from 'react';
import NavBarView from './nav-bar-view.jsx';

/**
 * NavBar
 * @returns {JSX.Element}
 * @constructor
 */
function NavBar({ newsProviders, changeNewsProvider }) {
  const [isProviderDropdownActive, setIsProviderDropdownActive] = useState(
    false
  );
  const onProviderDropdownClick = () =>
    setIsProviderDropdownActive(!isProviderDropdownActive);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const onMobileMenuClick = () => setIsMobileMenuActive(!isMobileMenuActive);

  return (
    <NavBarView
      isProviderDropdownActive={isProviderDropdownActive}
      onProviderDropdownClick={onProviderDropdownClick}
      isMobileMenuActive={isMobileMenuActive}
      onMobileMenuClick={onMobileMenuClick}
      newsProviders={newsProviders}
      changeNewsProvider={changeNewsProvider}
    />
  );
}

export default NavBar;
