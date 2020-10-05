import React from 'react';
import { css } from '@emotion/core';

interface AcknowledgementsProps {}

const Acknowledgements: React.FunctionComponent<AcknowledgementsProps> = ({}) => {
  return (
    <div className='acknowledgements d-flex align-items-center justify-content-center'>
      <div className='background-map'>
        <img
          src={require('@src/images/map-background.0b2cc01f.png')}
          alt='background map'
        />
      </div>
      <div
        className='custom-modal-wrapper '
        css={css`
          display: flex;
          height: calc(100vh - 112px);
        `}
      >
        <div className='custom-modal-container phc-container'>
          <div className='custom-modal-header d-flex align-items-center justify-content-start'>
            <div className='reference-title d-flex'>Acknowledgements</div>
          </div>
          <div
            className='custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap'
            css={css`
              height: calc(100% - 60px);
            `}
          >
            <div className='acknowledgements-content'>
              <h3 className='d-md-block d-sm-none d-none'>
                We acknowledge our colleagues for their contribution:
              </h3>
              <div className='reference-content d-flex justify-content-between align-items-start flex-wrap'>
                <p>
                  <strong>Camille Andre</strong>
                </p>
                <p>
                  <strong>Mike Baker</strong>
                </p>
                <p>
                  <strong>Eric Barrière</strong>
                </p>
                <p>
                  <strong>Richard Batchelder</strong>
                </p>
                <p>
                  <strong>Don Beasley</strong>
                </p>
                <p>
                  <strong>Mary Beattie</strong>
                </p>
                <p>
                  <strong>Andreas Beringer</strong>
                </p>
                <p>
                  <strong>Ciro Caravaggio</strong>
                </p>
                <p>
                  <strong>Isabelle Cognet</strong>
                </p>
                <p>
                  <strong>Gordana S. Cvetkovska</strong>
                </p>
                <p>
                  <strong>Luca Gambini</strong>
                </p>
                <p>
                  <strong>Teresa Gerlock</strong>
                </p>
                <p>
                  <strong>Darine Ghanem</strong>
                </p>
                <p>
                  <strong>Youssef Ghazi</strong>
                </p>
                <p>
                  <strong>Kelly Haenlein</strong>
                </p>
                <p>
                  <strong>Ankush Kalbalia</strong>
                </p>
                <p>
                  <strong>Ruchika Kumar</strong>
                </p>
                <p>
                  <strong>Etienne Laine</strong>
                </p>
                <p>
                  <strong>Thai Le</strong>
                </p>
                <p>
                  <strong>Jorge Martinalbo</strong>
                </p>
                <p>
                  <strong>Martina von Meyenn</strong>
                </p>
                <p>
                  <strong>Hans Middelhoven</strong>
                </p>
                <p>
                  <strong>Marius Mueller</strong>
                </p>
                <p>
                  <strong>Pouya Pakneshan</strong>
                </p>
                <p>
                  <strong>Priya Parameswaran</strong>
                </p>
                <p>
                  <strong>Camille Perret</strong>
                </p>
                <p>
                  <strong>Jennifer Pougnet</strong>
                </p>
                <p>
                  <strong>Claudia Reichelt</strong>
                </p>
                <p>
                  <strong>Marlene Thomas</strong>
                </p>
                <p>
                  <strong>Michael de Villiers</strong>
                </p>
                <p>
                  <strong>Penelope Wood</strong>
                </p>
                <p>
                  <strong>Xinzheng Chen</strong>
                </p>
                <p>
                  <strong>Karolina Zydziak</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acknowledgements;
