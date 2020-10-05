import React from 'react';
import { css } from '@emotion/core';
import { useLocation } from '@reach/router';

import ArrowLeft from '@src/images/arrow-left.3689acfa.svg';
import ArrowRight from '@src/images/arrow-right.0edc8883.svg';
import { LayoutContext } from '@src/components/Layout';

interface TopbarProps {}
const Topbar: React.FunctionComponent<TopbarProps> = ({}) => {
  const { isCollapse, setIsCollapse } = React.useContext(LayoutContext);
  const { pathname } = useLocation();

  return (
    <div
      className='top-bar d-flex align-items-center justify-content-center'
      css={css`
        background: ${['/welcome'].includes(pathname) ? 'rgb(0, 102, 204)' : 'transparent'};
        height: 52px;
      `}
    >
      <div className='side-bar-header d-flex align-items-center'>
        <div
          className='d-flex align-items-center justify-content-center custom-button collapse-button'
          onClick={() => setIsCollapse(!isCollapse)}
          css={css`
            width: 36px;
            height: 36px;
            background: rgb(255, 255, 255);
            border: 4px solid rgb(113, 198, 255);
            border-radius: 20px;
            cursor: pointer;
          `}
        >
          <img
            src={isCollapse ? ArrowRight : ArrowLeft}
            alt='toggle from'
            css={css`
              width: 10px;
              position: absolute;
              margin-bottom: 0;
            `}
          />
        </div>
        <span>
          {isCollapse ? 'Open the Navigation' : 'Collapse the Navigation'}
        </span>
      </div>
      {['/welcome'].includes(pathname) && <span>Welcome</span>}
    </div>
  );
};

export default Topbar;
