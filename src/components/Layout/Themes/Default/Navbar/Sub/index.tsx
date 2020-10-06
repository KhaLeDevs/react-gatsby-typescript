import React from 'react';
import { Link } from 'gatsby';
import { sidebarItem } from '@src/contants/Sidebar';
import RouteChild from '@src/components/Layout/Themes/Default/Navbar/Sub/RouteChild';

export interface SubProps {
  routes: sidebarItem[];
}

const Sub: React.FunctionComponent<SubProps> = ({ routes }) => {
  return (
    <ul className='w-full pl-6 mt-4'>
      {routes.map(
        ({ name: routeName, path: routePath, routes: subRoutes }, index) => (
          <li key={index} className='py-2'>
            <Link className='px-4 text-white' to={routePath}>
              {routeName}
            </Link>
            <RouteChild routes={subRoutes} />
          </li>
        )
      )}
    </ul>
  );
};

export default Sub;
