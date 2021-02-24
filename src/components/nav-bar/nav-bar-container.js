import { useState } from 'react';
import { connect } from 'react-redux';
import NavBarView from './nav-bar-view';

function mapStateToProps(state) {
  return {
    activeProvider: state.provider,
    activeLink: state.link,
  };
}

const initialNewsProviders = [
  {
    id: 0,
    title: 'LSM',
    active: true,
  },
  {
    id: 1,
    title: 'Delfi',
    active: false,
  },
];

/**
 * NavBar
 * @returns {JSX.Element}
 * @constructor
 */
function NavBar() {
  const [isProviderDropdownActive, setIsProviderDropdownActive] = useState(
    false
  );
  const onProviderDropdownClick = () =>
    setIsProviderDropdownActive(!isProviderDropdownActive);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const onMobileMenuClick = () => setIsMobileMenuActive(!isMobileMenuActive);

  const [newsProviders, setNewsProviders] = useState(
    [].concat(...initialNewsProviders)
  );
  const onChangeNewsProvider = (id) => {
    const newArr = [].concat(...initialNewsProviders);

    if (newArr.filter((provider) => provider.id === id).length) {
      newArr.forEach((provider, index) => {
        newArr[index].active = provider.id === id;
      });
    }

    setNewsProviders(newArr);
  };

  return (
    <NavBarView
      isProviderDropdownActive={isProviderDropdownActive}
      onProviderDropdownClick={onProviderDropdownClick}
      isMobileMenuActive={isMobileMenuActive}
      onMobileMenuClick={onMobileMenuClick}
      newsProviders={newsProviders}
      onChangeProvider={onChangeNewsProvider}
    />
  );
}

export default connect(mapStateToProps)(NavBar);
