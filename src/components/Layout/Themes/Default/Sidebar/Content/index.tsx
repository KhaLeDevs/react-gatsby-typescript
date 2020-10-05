import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { default as onClasses } from 'classnames';
import { useLocation } from '@reach/router';

import SearchIcon from '@src/images/search-icon.30da9b45.svg';
import { LayoutContext } from '@src/components/Layout';
import { useOnClickInsideWithTarget } from '@src/hooks/useOnClickOutside';

import useDebouncedCallback from '@src/hooks/useDebouncedCallback';
import { sidebarItems } from '@src/contants/Sidebar';
import { getSearchResults } from '@src/utils/search';
import tw from 'tailwind.macro';

interface SidebarContentProps {}

interface SearchResultItem {
  description: string;
  descriptionBefore: string;
  descriptionAfter: string;
  link: string;
}

const SidebarContent: React.FunctionComponent<SidebarContentProps> = ({}) => {
  const [active, setActive] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<SearchResultItem[]>(
    []
  );
  const { isCollapse } = React.useContext(LayoutContext);
  const refSearchButton = React.useRef<HTMLDivElement>(null);
  const refResult = React.useRef<HTMLDivElement>(null);
  const ref = useOnClickInsideWithTarget(
    () => setActive(false),
    refResult,
    refSearchButton
  );
  const { pathname } = useLocation();

  const onToggleSearch = () => {
    if (isCollapse) {
      return;
    }

    setActive(!active);
  };

  const getLevel = () => {
    console.log('pathname: ', pathname);
    if (['/welcome'].includes(pathname)) {
      return 1;
    }
    return 3;
  };

  const onSearch = useDebouncedCallback((keyword: string, level: number) => {
    const results = getSearchResults(keyword, level);
    return results && setSearchResults(results);
  }, 800);

  const onChange = (evt: any) => {
    const keyword = evt.target.value;
    if (keyword !== '') {
      const level = getLevel();
      return onSearch(keyword, level);
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 13) {
      onChange(evt);
    }
  };

  return (
    <div className='side-bar-content' ref={ref}>
      <div
        ref={refSearchButton}
        className={onClasses(
          `d-flex align-items-center search-button cursor-pointer h-10`,
          {
            active,
          }
        )}
        css={css`
          width: 280px;
          background: rgb(113, 198, 255);
          border-radius: 20px;
          transition: all 0.3s ease 0s;
        `}
      >
        <div
          onClick={onToggleSearch}
          className='custom-button d-flex align-items-center justify-content-center h-8 w-8 bg-white cursor-pointer absolute ml-1'
          css={css`
            border-radius: 16px;
          `}
        >
          <img
            src={SearchIcon}
            alt='search icon'
            css={css`
              ${tw`mb-0`}
              width: 23px;
              margin-right: 2px;
              margin-left: 1px;
            `}
          />
        </div>
        <input
          onChange={onChange}
          onKeyUp={onKeyUp}
          className='custom-input border-0 ml-1 text-xl'
          type='text'
          placeholder='SEARCH'
          css={css`
            width: calc(100% - 42px);
            border-radius: 20px;
            padding: 0px 15px;
            margin-left: 38px;
          `}
        />
        <span
          onClick={onToggleSearch}
          css={css`
            ${tw`text-xl w-full text-white ml-12`}
            transition: all 0.3s ease 0s;
          `}
        >
          SEARCH
        </span>
      </div>
      <div
        css={css`
          ${tw`h-full bg-transparent absolute`}
          width: 60px;
          left: -60px;
          z-index: 3;
        `}
      />
      <div
        ref={refResult}
        className='search-result'
        css={css`
          left: ${active ? '60px' : '-318px'};
        `}
      >
        <div className='results-container'>
          {searchResults.map(
            (
              { description, descriptionBefore, descriptionAfter, link },
              index
            ) => (
              <div key={index} className='search-result-item'>
                {descriptionBefore}
                <a href={link}>{description}</a>
                {descriptionAfter}
              </div>
            )
          )}
        </div>
      </div>
      <div className='side-bar-nav'>
        {sidebarItems.map(({ route, title, child }, index) => {
          const cHeight = 70;
          const activeIndex = sidebarItems.findIndex(
            item => item.route === pathname
          );
          const pos =
            index > activeIndex
              ? sidebarItems[activeIndex].child.length * cHeight
              : 0;
          const height =
            index === activeIndex
              ? sidebarItems[activeIndex].child.length * cHeight
              : 0;

          return (
            <div key={index} data-id={index}>
              <div
                className='nav-dot absolute cursor-pointer w-5 h-5'
                css={css`
                  background: ${pathname === route
                    ? 'rgb(0, 102, 204)'
                    : 'rgb(113, 198, 255)'};
                  top: ${100 + index * 40 + pos}px;
                  left: 36px;
                  border-radius: 10px;
                  z-index: 2;
                  transition: all 0.3s ease 0s;
                `}
              >
                <Link to={route} />
              </div>
              <div
                className='nav-menu absolute w-full'
                css={css`
                  top: ${90 + index * 40 + pos}px;
                  transition: all 0.3s ease 0s;
                `}
              >
                <div
                  className='nav-menu w-full'
                  css={css`
                    height: ${40 + height}px;
                    background: ${pathname === route ? 'white' : 'transparent'};
                    padding-left: 70px;
                    transition: all 0.3s ease 0s;
                  `}
                >
                  <Link
                    className='d-flex align-items-center nav-menu-title no-underline h-10 font-bold cursor-pointer text-black text-lg'
                    to={route}
                    css={css`
                      font-family: Imago;
                      transition: all 0.3s ease 0s;
                    `}
                  >
                    <span>{title}</span>
                  </Link>
                  {pathname === route && (
                    <div>
                      {child.map(({ name }, index) => (
                        <Link
                          key={index}
                          className='d-flex align-items-center nav-submenu font-normal text-black no-underline text-lg cursor-pointer'
                          to='partner/stakeholders.html'
                          css={css`
                            height: 70px;
                            padding: 10px;
                            border-bottom: 1px solid rgb(238, 238, 238);
                            transition: all 0.2s ease 0s;
                          `}
                        >
                          <span
                            css={css`
                              width: 220px;
                            `}
                          >
                            {name}
                          </span>
                          <img
                            src={
                              require('@src/images/nav-icon.1fa37873.svg')
                                .default
                            }
                            alt='nav icon'
                            css={css`
                              ${tw`absolute cursor-pointer`}
                              width: 22px;
                              height: 22px;
                              right: 5px;
                              transition: all 0.2s ease 0s;
                            `}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarContent;
