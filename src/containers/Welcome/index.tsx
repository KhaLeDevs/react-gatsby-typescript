import React from 'react';
import { css } from '@emotion/core';
import { Link } from '@reach/router';
import {
  ICustomDropdownItem,
  customDropdownData,
} from '@src/contants/CustomDropdown';

interface WelcomeProps {}

interface CustomDropdownProps {
  data: ICustomDropdownItem;
  index: number;
}

const CustomDropdown: React.FunctionComponent<CustomDropdownProps> = ({
  data,
}) => {
  const { name, title, icon, child, color } = data;

  return (
    <div className={`d-flex align-items-center custom-dropdown ${name}`}>
      <div
        className='d-flex align-items-center justify-content-center drop-button'
        css={css`
          width: 36px;
          height: 36px;
          background: ${color};
          border-radius: 20px;
          box-shadow: black 0px 0px 3px 0px;
          cursor: pointer;
          position: absolute;
          left: -18px;
        `}
      >
        <img
          src={icon}
          alt='dropdown icon'
          css={css`
            width: 13px;
            position: absolute;
            margin-left: 1px;
            margin-bottom: 0;
          `}
        />
      </div>
      <div
        className='dropdown-title d-flex align-items-center'
        css={css`
          border: 3px solid ${color};
          color: ${color};
        `}
      >
        <span>{title}</span>
      </div>
      <div
        className='custom-dropdown-list position-absolute'
        css={css`
          display: none !important;
        `}
      >
        {child.map(({ name, route }) => (
          <Link to={route}>{name}</Link>
        ))}
      </div>
    </div>
  );
};

const Welcome: React.FunctionComponent<WelcomeProps> = ({}) => {
  const [modalClass, setModalClass] = React.useState('');
  return (
    <div className='welcome page-wrapper d-flex align-items-center justify-content-center'>
      <div className='background-map'>
        <img
          css={css`
            max-width: inherit;
          `}
          src={require('@src/images/map-background.0b2cc01f.png')}
          alt='background map'
        />
        {customDropdownData.map((data, index) => (
          <CustomDropdown data={data} index={index} key={index} />
        ))}
      </div>
      <div
        className={`${modalClass} custom-modal-wrapper`}
        css={css`
          display: flex;
          height: calc(100vh - 112px);
        `}
      >
        <div className='custom-modal-container phc-container'>
          <div className='custom-modal-header d-flex align-items-center justify-content-start'>
            <button
              type='button'
              className='btn btn-primary close-button'
              onClick={() => setModalClass('hidden')}
            >
              <span>×</span>
            </button>
          </div>
          <div
            className='custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap'
            css={css`
              height: calc(100% - 60px);
            `}
          >
            <div className='welcome-modal'>
              <h2>
                Welcome to The Personalised Healthcare-Enabled Patient Journey
              </h2>
              <p>
                The complexity of Personalised Healthcare (PHC) calls for us to
                be systems thinkers with the ability to think and act from a
                whole system perspective and make decisions in light of the
                long-term health of the whole system. This map will provide a
                broad picture view and exploration of components of the PHC
                ecosystem, the interconnectedness of the system at play, and how
                you can engage with PHC.
              </p>
              <h2>Personalised Healthcare at Roche</h2>
              <span>
                Before diving into the PHC systems map, learn about why PHC is
                important and Roche’s PHC vision and strategy on the{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://phcportal.roche.com/'
                >
                  PHC portal
                </a>
                .
              </span>
              <hr />
              <h2>How We Built the PHC-Enabled Patient Journey</h2>
              <p>
                This systems map is a collaborative initiative brought to you by
                Medical and Commercial, and received insights from PD, Access,
                Compliance and Legal. This site will be updated on a half-yearly
                basis. This systems map is built around the future patient
                journey that is fully personalised. It includes key PHC concepts
                that are relevant for each step of a patient’s care, as well as
                key system enablers that are important to keep in mind. Check
                out the video below to learn about how we envision the future
                patient journey to be different from the existing one and how we
                built this site.
              </p>
              <br />
              <div
                className='welcome-videos'
                css={css`
                  width: 50%;
                  min-width: 500px;
                `}
              >
                <video width='100%' controls>
                  <source src={require('@src/images/phc.c8c8ef39.mp4')} />
                </video>
              </div>
              <br />
              <br />
              <p>
                We invite you to dive in and learn more,
                <br />- Wei-Ping Kuo, Competency Development
              </p>
              <div
                className='explore-button d-flex align-items-center justify-content-center'
                css={css`
                  width: 40%;
                `}
              >
                <span
                  css={css`
                    font-size: 20px;
                  `}
                >
                  Explore the PHC-Enabled Patient Journey
                </span>
              </div>
              <div
                className='disclaimer'
                css={css`
                  position: absolute;
                  border-radius: 0px 0px 10px 10px;
                `}
              >
                <span>
                  THE IMPLEMENTATION OF ANY STRATEGY OR ACTIVITY IS SUBJECT TO
                  AND CONDITIONAL UPON REVIEW AND APPROVAL BY RELEVANT BUSINESS
                  DECISION-MAKERS AND LEGAL/REGULATORY PARTNERS OF THE LOCAL
                  AFFILIATE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
