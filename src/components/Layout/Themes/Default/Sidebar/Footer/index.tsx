import React from 'react';
import { css } from '@emotion/core';

interface SidebarFooterProps {}
const SidebarFooter: React.FunctionComponent<SidebarFooterProps> = ({}) => {
  return (
    <div
      className='side-bar-footer d-flex align-items-center justify-content-center'
      css={css`
        height: 95px;
        border-top: 5px solid rgb(113, 198, 255);
        font-size: 12px;
        line-height: 17px;
      `}
    >
      <span>
        PDMA Competency Development
        <br />
        Roche Confidential &amp; Proprietary.
        <br />
        For Internal Use Only.
        <br />
        ©2019 F.Hoffmann-La Roche Ltd
        <br />
        Last Updated February 2020
      </span>
    </div>
  );
};

export default SidebarFooter;
