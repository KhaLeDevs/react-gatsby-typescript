import React from 'react';
import { css } from '@emotion/core';
import { Link } from '@reach/router';

import SearchIcon from '@src/images/search-icon.30da9b45.svg';

interface SidebarContentProps {}
const SidebarContent: React.FunctionComponent<SidebarContentProps> = () => {
  return (
    <div className='side-bar-content'>
      <div
        className='d-flex align-items-center search-button'
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
            `}
          />
        </div>
        <input
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
      ></div>
      <div
        className='search-result'
        css={css`
          left: -318px;
        `}
      >
        <div className='results-container'></div>
      </div>
      <div className='side-bar-nav'>
        <div>
          <div
            className='nav-dot'
            css={css`
              width: 20px;
              height: 20px;
              background: rgb(0, 102, 204);
              position: absolute;
              top: 100px;
              left: 36px;
              border-radius: 10px;
              cursor: pointer;
              z-index: 2;
              transition: all 0.3s ease 0s;
            `}
          >
            <Link to='/welcome'></Link>
          </div>
          <div
            className='nav-menu'
            css={css`
              width: 100%;
              position: absolute;
              top: 90px;
              transition: all 0.3s ease 0s;
            `}
          >
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                height: 40px;
                background: white;
                padding-left: 70px;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link
                className='d-flex align-items-center nav-menu-title'
                to='./welcome.html'
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
                <span>WELCOME</span>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='nav-dot'
            css={css`
              width: 20px;
              height: 20px;
              background: rgb(113, 198, 255);
              position: absolute;
              top: 140px;
              left: 36px;
              border-radius: 10px;
              cursor: pointer;
              z-index: 2;
              transition: all 0.3s ease 0s;
            `}
          >
            <Link to='./future-patient-journey/index.html'></Link>
          </div>
          <div
            className='nav-menu'
            css={css`
              width: 100%;
              position: absolute;
              top: 130px;
              transition: all 0.3s ease 0s;
            `}
          >
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                height: 40px;
                background: transparent;
                padding-left: 70px;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link
                className='d-flex align-items-center nav-menu-title'
                to='./future-patient-journey/index.html'
                css={css`
                  height: 40px;
                  font-size: 18px;
                  font-family: Imago;
                  font-weight: normal;
                  cursor: pointer;
                  transition: all 0.3s ease 0s;
                  color: black;
                  text-decoration: none;
                `}
              >
                <span>FUTURE PATIENT JOURNEY</span>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='nav-dot'
            css={css`
              width: 20px;
              height: 20px;
              background: rgb(113, 198, 255);
              position: absolute;
              top: 180px;
              left: 36px;
              border-radius: 10px;
              cursor: pointer;
              z-index: 2;
              transition: all 0.3s ease 0s;
            `}
          >
            <Link to='./systems-enablers/index.html'></Link>
          </div>
          <div
            className='nav-menu'
            css={css`
              width: 100%;
              position: absolute;
              top: 170px;
              transition: all 0.3s ease 0s;
            `}
          >
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                height: 40px;
                background: transparent;
                padding-left: 70px;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link
                className='d-flex align-items-center nav-menu-title'
                to='./systems-enablers/index.html'
                css={css`
                  height: 40px;
                  font-size: 18px;
                  font-family: Imago;
                  font-weight: normal;
                  cursor: pointer;
                  transition: all 0.3s ease 0s;
                  color: black;
                  text-decoration: none;
                `}
              >
                <span>SYSTEMS ENABLERS</span>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='nav-dot'
            css={css`
              width: 20px;
              height: 20px;
              background: rgb(113, 198, 255);
              position: absolute;
              top: 220px;
              left: 36px;
              border-radius: 10px;
              cursor: pointer;
              z-index: 2;
              transition: all 0.3s ease 0s;
            `}
          >
            <Link to='./abbrevation.html'></Link>
          </div>
          <div
            className='nav-menu'
            css={css`
              width: 100%;
              position: absolute;
              top: 210px;
              transition: all 0.3s ease 0s;
            `}
          >
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                height: 40px;
                background: transparent;
                padding-left: 70px;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link
                className='d-flex align-items-center nav-menu-title'
                to='./abbrevation.html'
                css={css`
                  height: 40px;
                  font-size: 18px;
                  font-family: Imago;
                  font-weight: normal;
                  cursor: pointer;
                  transition: all 0.3s ease 0s;
                  color: black;
                  text-decoration: none;
                `}
              >
                <span>ABBREVIATION LIST</span>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='nav-dot'
            css={css`
              width: 20px;
              height: 20px;
              background: rgb(113, 198, 255);
              position: absolute;
              top: 260px;
              left: 36px;
              border-radius: 10px;
              cursor: pointer;
              z-index: 2;
              transition: all 0.3s ease 0s;
            `}
          >
            <Link to='./acknowledgements.html'></Link>
          </div>
          <div
            className='nav-menu'
            css={css`
              width: 100%;
              position: absolute;
              top: 250px;
              transition: all 0.3s ease 0s;
            `}
          >
            <div
              className='nav-menu'
              css={css`
                width: 100%;
                height: 40px;
                background: transparent;
                padding-left: 70px;
                transition: all 0.3s ease 0s;
              `}
            >
              <Link
                className='d-flex align-items-center nav-menu-title'
                to='./acknowledgements.html'
                css={css`
                  height: 40px;
                  font-size: 18px;
                  font-family: Imago;
                  font-weight: normal;
                  cursor: pointer;
                  transition: all 0.3s ease 0s;
                  color: black;
                  text-decoration: none;
                `}
              >
                <span>ACKNOWLEDGEMENTS</span>
              </Link>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
