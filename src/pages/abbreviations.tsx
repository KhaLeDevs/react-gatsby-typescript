import React from 'react';
import Layout from '@src/components/Layout';
import Abbreviations from '@src/containers/Abbreviations';

interface AbbreviationsProps {
  location: any;
}

const AbbreviationsPage: React.FunctionComponent<AbbreviationsProps> = ({
  location,
}) => {
  return (
    <Layout location={location}>
      <Abbreviations />
    </Layout>
  );
};

export default AbbreviationsPage;
