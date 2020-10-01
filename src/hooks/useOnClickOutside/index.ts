import React from 'react';

export const useOnClickOutside = (
  cb: (target: any) => any
): React.Ref<HTMLDivElement> => {
  const node = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClick = (e: any) => {
      const clickInside = node.current! && node.current!.contains(e.target);
      if (cb && !clickInside) {
        // inside click
        return cb(e.target);
      }
      // outside click
    };
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return node;
};
