import React from 'react';
import { Link } from 'gatsby';

import Logo from '@src/images/logo.2c6efde3.svg';
import { LayoutContext } from '@src/components/Layout';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({}) => {
  const { isCollapse, setIsCollapse } = React.useContext(LayoutContext);

  return (
    <header className='relative z-10 border-b border-gray-200 bg-white flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
      <div className='md:flex items-center'>
        <Link
          to='/'
          className='block'
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <img className='h-10 w-auto' src={Logo} alt='Logo' />
        </Link>
      </div>

      <div className='flex text-sm leading-5'>
        <div className='relative'>
          <button className='transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200'>
            <input className='border-0 bg-transparent outline-none' type='text' placeholder='Search' />
          </button>
          <div className='pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center'>
            <svg
              className='fill-current pointer-events-none text-gray-600 w-4 h-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
