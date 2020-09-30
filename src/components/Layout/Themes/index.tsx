import React from 'react';
import ThemeDefault from '@src/components/Layout/Themes/Default';

interface SkinProps {}

const Theme: React.FunctionComponent<SkinProps> = ({ children }) => {
  return (
    <>
      <ThemeDefault>{children}</ThemeDefault>
    </>
  );
};

export default Theme;
