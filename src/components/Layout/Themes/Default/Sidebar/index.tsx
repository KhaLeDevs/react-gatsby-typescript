import React from 'react';
import { css } from '@emotion/core';
import SidebarFooter from '@src/components/Layout/Themes/Default/Sidebar/Footer';
import SidebarContent from '@src/components/Layout/Themes/Default/Sidebar/Content';
import { LayoutContext } from '@src/components/Layout';
import { useWindowDimensions } from '@src/hooks/useWindowDimensions';

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = ({}) => {
  const { setIsCollapse } = React.useContext(LayoutContext);
  const { width } = useWindowDimensions();

  const onClick = () => {
    return width <= 800 && setIsCollapse(true);
  };

  return (
    <div className='side-bar-wrapper'>
      <div
        className='side-bar'
        css={css`
          width: 318px;
          background: rgba(255, 255, 255, 0.68);
        `}
      >
        <div className='side-bar-left-band' />
        <div
          className='side-bar-header'
          css={css`
            background: rgb(0, 102, 204);
          `}
        />
        <SidebarContent />
        <SidebarFooter />
      </div>
      <div className='side-bar-right-panel' onClick={onClick} />
    </div>
  );
};

export default Sidebar;
