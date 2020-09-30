/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';

import './styles/layout.css';
import './styles/tailwind.css';
import './index.scss';
import Theme from '@src/components/Layout/Themes';

interface LayoutProps {
  location: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }: any) => {
  return (
    <>
      <Theme>{children}</Theme>
    </>
  );
};

export default Layout;
