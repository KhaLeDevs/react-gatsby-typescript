import React from 'react';

type GetSize = (el: HTMLElement) => { width: number; height: number };
type UseDimensions = (ref: any) => any;

const getSize: GetSize = el => {
  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
};

const useDimensions: UseDimensions = ref => {
  const [dimension, setDimension] = React.useState(
    getSize(ref ? ref.current : {})
  );

  const handleResize = React.useCallback(() => {
    if (ref.current) {
      setDimension(getSize(ref.current));
    }
  }, [ref]);

  React.useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [ref.current]);

  return dimension;
};

export default useDimensions;
