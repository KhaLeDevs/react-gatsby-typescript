/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Dispatch, SetStateAction } from 'react';

import './styles/layout.css';
import './styles/tailwind.css';
import './index.scss';
import Theme from '@src/components/Layout/Themes';

interface LayoutProps {
  location: any;
}

interface UseLayoutOptions {}

interface LayoutContextOptions {
  isCollapse: boolean;
  setIsCollapse: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = React.createContext<LayoutContextOptions>(
  {} as LayoutContextOptions
);

const useLayout = ({}: UseLayoutOptions): LayoutContextOptions => {
  const [isCollapse, setIsCollapse] = React.useState(false);

  return {
    isCollapse,
    setIsCollapse,
  };
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const layoutOption = useLayout({});

  return (
    <LayoutContext.Provider value={layoutOption}>
      <Theme>{children}</Theme>
    </LayoutContext.Provider>
  );
};

export default Layout;
