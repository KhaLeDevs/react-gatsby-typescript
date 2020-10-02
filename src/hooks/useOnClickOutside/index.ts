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

export const useOnClickInsideWithTarget = (
  cb: (target: any) => any,
  ...target: React.RefObject<HTMLDivElement>[]
) => {
  const node = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: any) => {
      const clickInside = node.current! && node.current!.contains(e.target);
      const preventToTarget = target.some(element => {
        return element.current! && element.current!.contains(e.target);
      });

      if (cb && clickInside && !preventToTarget) {
        return cb(e.target);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return node;
};
