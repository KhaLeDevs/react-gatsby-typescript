import React from 'react';
import { css } from '@emotion/core';

interface AbbreviationsProps {}

const Abbreviations: React.FunctionComponent<AbbreviationsProps> = ({}) => {
  return (
    <div className='abbreviation d-flex align-items-center justify-content-center'>
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
            <div className='reference-title d-flex'>Abbreviation List</div>
          </div>
          <div
            className='custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap'
            css={css`
              height: calc(100% - 60px);
            `}
          >
            <div className='abbreviation-content'>
              <div className='reference-content d-flex justify-content-between align-items-start flex-wrap'>
                <p>
                  <span>AA: </span>Advanced Analytics
                </p>
                <p>
                  <span>AI: </span>Artificial Intelligence
                </p>
                <p>
                  <span>CDS: </span>Clinical Decision Support
                </p>
                <p>
                  <span>CDx: </span>Companion Diagnostics
                </p>
                <p>
                  <span>CGP: </span>Comprehensive Genomic Profiling*
                </p>
                <p>
                  <span>CoDx: </span>Complementary Diagnostics
                </p>
                <p>
                  <span>ctDNA: </span>Circulating Tumor DNA
                </p>
                <p>
                  <span>CUP: </span>Carcinoma of Unknown Primary
                </p>
                <p>
                  <span>EDIS: </span>Enhanced Data and Insight Sharing
                </p>
                <p>
                  <span>EHR: </span>Electronic Health Record
                </p>
                <p>
                  <span>EMA: </span>European Medicines Agency
                </p>
                <p>
                  <span>ESMO: </span>European Society for Medical Oncology
                </p>
                <p>
                  <span>F.A.I.R.: </span>Findable, Accessible, Interoperable,
                  and Reusable
                </p>
                <p>
                  <span>FDA: </span>Food and Drug Administration
                </p>
                <p>
                  <span>FISH: </span>Fluorescence In Situ Hybridization
                </p>
                <p>
                  <span>FMI: </span>Foundation Medicine
                </p>
                <p>
                  <span>H&amp;E: </span>Hematoxylin &amp; Eosin
                </p>
                <p>
                  <span>HCPs: </span>Healthcare Providers
                </p>
                <p>
                  <span>HER2: </span>Receptor tyrosine-protein kinase erbB-2
                </p>
                <p>
                  <span>HTA: </span>Health Technology Assessment
                </p>
                <p>
                  <span>IEEPO: </span>International Experience Exchange with
                  Patient Organisations
                </p>
                <p>
                  <span>IHC: </span>Immunohistochemistry
                </p>
                <p>
                  <span>IMDRF: </span>International Medical Device Regulators
                  Forum
                </p>
                <p>
                  <span>IP: </span>Intellectual Property
                </p>
                <p>
                  <span>IRISe: </span>IRIS Enterprise
                </p>
                <p>
                  <span>KVV: </span>Health Insurance Ordinance (Switzerland)
                </p>
                <p>
                  <span>MDAS: </span>Meaningful Data at Scale*
                </p>
                <p>
                  <span>MGTO: </span>Molecularly-Guided Therapy Option
                </p>
                <p>
                  <span>MoA: </span>Mode of Action
                </p>
                <p>
                  <span>MRI: </span>Magnetic Resonance Imaging
                </p>
                <p>
                  <span>MS: </span>Multiple Sclerosis
                </p>
                <p>
                  <span>MVP: </span>Minimal Viable Product
                </p>
                <p>
                  <span>NCCN: </span>National Comprehensive Cancer Network
                </p>
                <p>
                  <span>NGS: </span>Next-Generation Sequencing
                </p>
                <p>
                  <span>NICE: </span>National Institute for Health and Care
                  Excellence
                </p>
                <p>
                  <span>NTRK: </span>Neurotrophic Tyrosine Receptor Kinase
                </p>
                <p>
                  <span>OKRs: </span>Objectives and Key Results
                </p>
                <p>
                  <span>PD-L1: </span>Programmed Death-Ligand 1
                </p>
                <p>
                  <span>PET: </span>Positron Emission Tomography
                </p>
                <p>
                  <span>PCR: </span>Polymerase Chain Reaction
                </p>
                <p>
                  <span>PHC: </span>Personalised Healthcare*
                </p>
                <p>
                  <span>PPC&amp;A: </span>Personalised Patient Care and Access*
                </p>
                <p>
                  <span>PRM: </span>Personalised Reimbursement Models*
                </p>
                <p>
                  <span>PRO: </span>Patient-Reported Outcome
                </p>
                <p>
                  <span>R&amp;D: </span>Research and Development
                </p>
                <p>
                  <span>RAAN: </span>Roche Advanced Analytics Network
                </p>
                <p>
                  <span>RSI: </span>Roche Science Infrastructure
                </p>
                <p>
                  <span>RWD: </span>Real-World Data
                </p>
                <p>
                  <span>RWE: </span>Real-World Evidence
                </p>
                <p>
                  <span>SaMD: </span>Software as Medical Device
                </p>
                <p>
                  <span>VBHC: </span>Value-Based HealthCare
                </p>
                <span>
                  <i>*Roche-specific terms</i>
                  <br />
                  <br />
                  For more information, consult our{' '}
                  <a
                    href='https://drive.google.com/file/d/1HJ8K_wyZvjIVoe2OG19TdYsZvuKvmnHo/view'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    lexicon
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abbreviations;
