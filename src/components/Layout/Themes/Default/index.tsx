import React from 'react';
import Header from '@src/components/Layout/Themes/Default/Header';
import PageContent from '@src/components/Layout/Themes/Default/PageContent';
import Sidebar from '@src/components/Layout/Themes/Default/Sidebar';
import Topbar from '@src/components/Layout/Themes/Default/Topbar';

interface ThemeDefaultProps {}

const ThemeDefault: React.FunctionComponent<ThemeDefaultProps> = ({
  children,
}) => {
  return (
    <>
      <div id='root'>
        <Header />
        <div className='page-container'>
          <div className='background-image'>
            <img
              src={require('@src/images/background.e88657e9.png')}
              alt='background'
            />
          </div>
          <Topbar />
          <Sidebar />
          <PageContent>{children}</PageContent>
        </div>
      </div>
    </>
  );
};

export default ThemeDefault;
