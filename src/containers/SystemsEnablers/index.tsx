import React from 'react';
import { css } from '@emotion/core';
import { customDropdownData } from "@src/contants/CustomDropdown"
import { CustomDropdown } from "@src/containers/Welcome"

interface SystemsEnablersProps {}

const SystemsEnablers: React.FunctionComponent<SystemsEnablersProps> = ({}) => {
  return (
    <div className='system-enablers d-flex align-items-center justify-content-center'>
      <div className='background-map'>
        <img
          css={css`
            max-width: inherit;
          `}
          src={require('@src/images/map-enablers.f37377b6.png')}
          alt='background map'
        />
        {customDropdownData.map((data, index) => index > 4 && (
          <CustomDropdown data={data} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SystemsEnablers;
