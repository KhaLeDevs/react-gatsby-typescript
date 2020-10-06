import React from 'react';
import { sidebarItems } from '@src/contants/Sidebar';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { LayoutContext } from '@src/components/Layout';
import { default as SubNav } from '@src/components/Layout/Themes/Default/Navbar/Sub';

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  const { isCollapse, setIsCollapse } = React.useContext(LayoutContext);

  return (
    <>
      <nav className='flex fixed h-full text-gray-700 border-b border-gray-200 z-10'>
        <div
          className='flex py-3 relative z-50 w-8'
          css={css`
            background: #2e2e2e;
          `}
        >
          <button
            type='button'
            className='flex h-1 px-2 items-center text-gray-500 focus:outline-none'
            aria-label='Open site navigation'
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <svg
              className='fill-current w-4 h-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <div
          className={`transform top-0 left-0 pl-8 pt-16 pb-8 w-72 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isCollapse ? '-translate-x-64' : 'translate-x-0'
          }`}
          css={css`margin-top: 1px;`}
        >
          <div className='h-full py-4' css={css`
            background-color: #525659;
          `}>
            <div className='h-full overflow-auto'>
              <ul>
                <li className='py-2'>
                  <h3 className='flex items-center justify-between px-4 text-white text-lg uppercase'>
                    Menu
                  </h3>
                </li>
                {sidebarItems.map(({ name, path, routes }, index) => (
                  <li key={index} className='py-2'>
                    <Link
                      className='flex items-center justify-between px-4 text-white font-bold'
                      to={path}
                    >
                      <span>{name}</span>
                      <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current'>
                        <path d='M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z' />
                      </svg>
                    </Link>
                    <SubNav routes={routes} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
