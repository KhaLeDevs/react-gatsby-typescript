import React from 'react';
import Header from '@src/components/Layout/Themes/Default/Header';
import PageContent from '@src/components/Layout/Themes/Default/PageContent';
import Topbar from '@src/components/Layout/Themes/Default/Topbar';
import { LayoutContext } from "@src/components/Layout"
import Navbar from "@src/components/Layout/Themes/Default/Navbar"

interface ThemeDefaultProps {}

const ThemeDefault: React.FunctionComponent<ThemeDefaultProps> = ({
  children,
}) => {
  const { isCollapse } = React.useContext(LayoutContext);

  return (
    <>
      <div id='root'>
        <Header />
        <main className='relative'>
          <Navbar />
          <div className={`page-container ${isCollapse ? 'side-bar-collapsed' : ''}`}>
            <div className='background-image'>
              <img
                src={require('@src/images/background.e88657e9.png')}
                alt='background'
              />
            </div>
            <PageContent>{children}</PageContent>
          </div>
        </main>
      </div>
    </>
  );
};

export default ThemeDefault;
