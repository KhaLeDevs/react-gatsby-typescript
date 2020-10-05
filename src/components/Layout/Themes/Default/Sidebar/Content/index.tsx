import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { default as onClasses } from 'classnames';
import { useLocation } from '@reach/router';

import SearchIcon from '@src/images/search-icon.30da9b45.svg';
import { LayoutContext } from '@src/components/Layout';
import { useOnClickInsideWithTarget } from '@src/hooks/useOnClickOutside';

import { searchData } from '@src/contants/data';
import useDebouncedCallback from '@src/hooks/useDebouncedCallback';
import { sidebarItems } from '@src/contants/Sidebar';

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
    console.log('search: ', keyword, '-level: ', level);

    const results = searchData
      .map(dataRow => {
        const { content, link } = dataRow;
        let keyDescription;
        let keyDescription_before;
        let keyDescription_after;
        let result,
          keyIndexList = [];
        let regex = new RegExp(keyword, 'gi');
        while ((result = regex.exec(content))) {
          keyIndexList.push(result.index);
        }

        return keyIndexList.map(keyIndex => {
          keyDescription = content.slice(keyIndex, keyIndex + keyword.length);
          if (keyIndex >= 70) {
            keyDescription_before = content.slice(keyIndex - 70, keyIndex);
            keyDescription_after = content.slice(
              keyIndex + keyword.length,
              keyIndex + keyword.length + 80
            );
          } else {
            keyDescription_before = content.slice(0, keyIndex);
            keyDescription_after = content.slice(
              keyIndex + keyword.length,
              keyIndex + keyword.length + 100
            );
          }

          return {
            description: keyDescription,
            descriptionBefore: keyDescription_before,
            descriptionAfter: keyDescription_after,
            link,
          };
        });
      })
      .filter(arr => !!arr.length)
      .reduce((_accumulator, currentValue, _currentIndex, _array) => {
        return [...currentValue];
      }, []);

    return setSearchResults(results);
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
        className={onClasses(`d-flex align-items-center search-button`, {
          active,
        })}
        css={css`
          width: 280px;
          height: 40px;
          background: rgb(113, 198, 255);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease 0s;
        `}
      >
        <div
          onClick={onToggleSearch}
          className='custom-button d-flex align-items-center justify-content-center'
          css={css`
            width: 32px;
            height: 32px;
            background: white;
            border-radius: 16px;
            cursor: pointer;
            margin-left: 4px;
            position: absolute;
          `}
        >
          <img
            src={SearchIcon}
            alt='search icon'
            css={css`
              width: 23px;
              margin-right: 2px;
              margin-left: 1px;
              margin-bottom: 0;
            `}
          />
        </div>
        <input
          onChange={onChange}
          onKeyUp={onKeyUp}
          className='custom-input'
          type='text'
          placeholder='SEARCH'
          css={css`
            width: calc(100% - 42px);
            border: 0px;
            border-radius: 20px;
            padding: 0px 15px;
            margin-left: 38px;
            margin-right: 4px;
            font-size: 20px;
          `}
        />
        <span
          onClick={onToggleSearch}
          css={css`
            width: 100%;
            font-size: 20px;
            color: white;
            margin-left: 48px;
            transition: all 0.3s ease 0s;
          `}
        >
          SEARCH
        </span>
      </div>
      <div
        css={css`
          width: 60px;
          height: 100%;
          background: transparent;
          position: absolute;
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
        {sidebarItems.map(({ route, title }, index) => (
          <div key={index} data-id={index}>
            <div
              className='nav-dot'
              css={css`
                width: 20px;
                height: 20px;
                background: ${pathname === route
                  ? 'rgb(0, 102, 204)'
                  : 'rgb(113, 198, 255)'};
                position: absolute;
                top: ${100 + index * 40}px;
                left: 36px;
                border-radius: 10px;
                cursor: pointer;
                z-index: 2;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link to={route} />
            </div>
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                position: absolute;
                top: ${90 + index * 40}px;
                transition: all 0.3s ease 0s;
              `}
            >
              <div
                className='nav-menu'
                css={css`
                  width: 100%;
                  height: 40px;
                  background: ${pathname === route ? 'white' : 'transparent'};
                  padding-left: 70px;
                  transition: all 0.3s ease 0s;
                `}
              >
                <Link
                  className='d-flex align-items-center nav-menu-title no-underline'
                  to={route}
                  css={css`
                    height: 40px;
                    font-size: 18px;
                    font-family: Imago;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease 0s;
                    color: black;
                    text-decoration: none;
                  `}
                >
                  <span>{title}</span>
                </Link>
                <div />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarContent;
