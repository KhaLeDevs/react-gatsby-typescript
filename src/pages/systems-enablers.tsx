import React from 'react';
import SystemsEnablers from '@src/containers/SystemsEnablers';
import Layout from '@src/components/Layout';

interface SystemsEnablersPageProps {
  location: any;
}

const SystemsEnablersPage: React.FunctionComponent<SystemsEnablersPageProps> = ({
  location,
}) => {
  return (
    <Layout location={location}>
      <SystemsEnablers />
    </Layout>
  );
};

export default SystemsEnablersPage;
