import PropTypes from 'prop-types';
import React from 'react';

const SidebarIcon = require('@/src/images/sidebar-icon.1dc3573e.svg').default;

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({}) => (
  <div className='header d-flex align-items-center justify-content-between'>
    <img
      className='menu-icon'
      src='../images/sidebar-icon.1dc3573e.svg'
      alt='menu'
    />
    <SidebarIcon className='menu-icon' />
    <a href='./welcome.html'>
      <span className='title'>
        Personalised Healthcare-Enabled Patient Journey
      </span>
      <span className='mobile-title'>PHC Systems Map</span>
    </a>
    <a href='./welcome.html'>
      <img className='logo' src='../images/logo.2c6efde3.svg' alt='logo' />
    </a>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
