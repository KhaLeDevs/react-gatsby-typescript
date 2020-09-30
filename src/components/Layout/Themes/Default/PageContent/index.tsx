import React from 'react';
import { css } from '@emotion/core';

interface PageContentProps {}

const PageContent: React.FunctionComponent<PageContentProps> = ({
  children,
}) => {
  return (
    <div
      className='page-content'
      css={css`
        width: calc(100vw - 318px);
        left: 318px;
      `}
    >
      {children}
    </div>
  );
};

export default PageContent;
