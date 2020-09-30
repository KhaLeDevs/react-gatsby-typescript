import React from 'react';
import { css } from '@emotion/core';

interface WelcomeProps {}

const Welcome: React.FunctionComponent<WelcomeProps> = ({}) => {
  return (
    <div className='welcome page-wrapper d-flex align-items-center justify-content-center'>
      <div className='background-map'>
        <img src='../images/map-background.0b2cc01f.png' alt='background map' />
        <div className='d-flex align-items-center custom-dropdown diagnosis-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(0, 102, 204);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(0, 102, 204);
              color: rgb(0, 102, 204);
            `}
          >
            <span>Early Personalised Diagnosis</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='future-patient-journey/diagnosis/overview.html'>
              Overview
            </a>
            <a href='future-patient-journey/diagnosis/diagnostics.html'>
              Diagnostics
            </a>
            <a href='future-patient-journey/diagnosis/genomics.html'>
              Genomics
            </a>
            <a href='future-patient-journey/diagnosis/advanced-imaging.html'>
              Advanced Imaging
            </a>
            <a href='future-patient-jou rney/diagnosis/digital-pathology.html'>
              Digital Pathology
            </a>
            <a href='future-patient-journey/diagnosis/cds-systems.html'>
              CDS Systems
            </a>
            <a href='future-patient-journey/diagnosis/digital-health.html'>
              Digital Health and SaMD
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown monitoring-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(0, 102, 204);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(0, 102, 204);
              color: rgb(0, 102, 204);
            `}
          >
            <span>Personalised Remote Monitoring &amp; Care</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='future-patient-journey/monitoring/overview.html'>
              Overview
            </a>
            <a href='future-patient-journey/monitoring/diagnostics.html'>
              Diagnostics
            </a>
            <a href='future-patient-journey/monitoring/genomics.html'>
              Genomics
            </a>
            <a href='future-patient-journey/monitoring/advanced-imaging.html'>
              Advanced Imaging
            </a>
            <a href='future-patient-journey/monitoring/cds-systems.html'>
              CDS Systems
            </a>
            <a href='future-patient-journey/monitoring/digital-health.html'>
              Digital Health and SaMD
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown data-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(0, 102, 204);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(0, 102, 204);
              color: rgb(0, 102, 204);
            `}
          >
            <span>Data &amp; Insights</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='future-patient-journey/data/overview.html'>Overview</a>
            <a href='future-patient-journey/data/real-world-data.html'>
              Real-World Data
            </a>
            <a href='future-patient-journey/data/advanced-analytics.html'>
              Advanced Analytics
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown care-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(0, 102, 204);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(0, 102, 204);
              color: rgb(0, 102, 204);
            `}
          >
            <span>Personalised Care Plan</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='future-patient-journey/care/overview.html'>Overview</a>
            <a href='future-patient-journey/care/diagnostics.html'>
              Diagnostics
            </a>
            <a href='future-patient-journey/care/cds-systems.html'>
              CDS Systems
            </a>
            <a href='future-patient-journey/care/digital-health.html'>
              Digital Health and SaMD
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown access-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(0, 102, 204);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(0, 102, 204);
              color: rgb(0, 102, 204);
            `}
          >
            <span>Rapid Access to Personalised Interventions</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='future-patient-journey/access/overview.html'>Overview</a>
            <a href='future-patient-journey/access/diagnostics.html'>
              Diagnostics
            </a>
            <a href='future-patient-journey/access/cds-systems.html'>
              CDS Systems
            </a>
            <a href='future-patient-journey/access/digital-health.html'>
              Digital Health and SaMD
            </a>
            <a href='future-patient-journey/access/value-based-healthcare.html'>
              Value-based Healthcare
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown roche-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(237, 139, 0);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(237, 139, 0);
              color: rgb(237, 139, 0);
            `}
          >
            <span>Roche Initiatives</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='systems-enablers/roches-initiatives/context.html'>
              Context
            </a>
            <a href='systems-enablers/roches-initiatives/showcases.html'>
              Showcases
            </a>
            <a href='systems-enablers/roches-initiatives/shining-towers.html'>
              Shining Towers
            </a>
            <a href='systems-enablers/roches-initiatives/examples.html'>
              Examples
            </a>
          </div>
        </div>
        <div className='d-flex align-items-center custom-dropdown partners-dropdown'>
          <div
            className='d-flex align-items-center justify-content-center drop-button'
            css={css`
              width: 36px;
              height: 36px;
              background: rgb(237, 139, 0);
              border-radius: 20px;
              box-shadow: black 0px 0px 3px 0px;
              cursor: pointer;
              position: absolute;
              left: -18px;
            `}
          >
            <img
              src='../images/arrow-dropdown.2ed7f2a2.svg'
              alt='dropdown icon'
              css={css`
                width: 13px;
                position: absolute;
                margin-left: 1px;
              `}
            />
          </div>
          <div
            className='dropdown-title d-flex align-items-center'
            css={css`
              border: 3px solid rgb(237, 139, 0);
              color: rgb(237, 139, 0);
            `}
          >
            <span>Partners</span>
          </div>
          <div
            className='custom-dropdown-list position-absolute'
            css={css`
              display: none;
            `}
          >
            <a href='systems-enablers/partner/stakeholders.html'>
              Stakeholders
            </a>
            <a href='systems-enablers/partner/policy.html'>Policy</a>
            <a href='systems-enablers/partner/phc-it.html'>PHC IX/Technology</a>
            <a href='systems-enablers/partner/patient-partnerships.html'>
              Patient Partnerships
            </a>
          </div>
        </div>
      </div>
      <div
        className='custom-modal-wrapper'
        css={css`
          display: flex;
          height: calc(100vh - 112px);
        `}
      >
        <div className='custom-modal-container phc-container'>
          <div className='custom-modal-header d-flex align-items-center justify-content-start'>
            <button type='button' className='btn btn-primary close-button'>
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
                  <source src='../images/phc.c8c8ef39.mp4' />
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
