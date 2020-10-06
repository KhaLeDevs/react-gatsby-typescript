import React from 'react';
import { Link } from 'gatsby';
import { SubProps } from '@src/components/Layout/Themes/Default/Navbar/Sub';

interface RouteChildProps extends SubProps {}

const RouteChild: React.FunctionComponent<RouteChildProps> = ({ routes }) => {
  return (
    <ul className='w-full pl-6 mt-4'>
      {routes.map(({ name, path }, index) => (
        <li key={index} className='py-2'>
          <Link className='px-4 text-white' to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RouteChild;
