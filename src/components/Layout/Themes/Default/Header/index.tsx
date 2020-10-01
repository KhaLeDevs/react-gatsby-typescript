import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as SidebarIcon } from '@src/images/sidebar-icon.1dc3573e.svg';
import Logo from '@src/images/logo.2c6efde3.svg';
import { css } from '@emotion/core';
import { LayoutContext } from '@src/components/Layout';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({}) => {
  const { isCollapse, setIsCollapse } = React.useContext(LayoutContext);

  return (
    <div className='header d-flex align-items-center justify-content-between'>
      <SidebarIcon
        className='menu-icon'
        onClick={() => setIsCollapse(!isCollapse)}
      />
      <Link to='/welcome'>
        <span className='title'>
          Personalised Healthcare-Enabled Patient Journey
        </span>
        <span className='mobile-title'>PHC Systems Map</span>
      </Link>
      <Link to='/welcome'>
        <img
          css={css`
            margin-bottom: 0;
            max-width: inherit;
          `}
          className='logo'
          src={Logo}
          alt='logo'
        />
      </Link>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
