import React from 'react';
import Layout from '@src/components/Layout';
import Acknowledgements from "@src/containers/Acknowledgements"

interface AcknowledgementsProps {
  location: any;
}

const AcknowledgementsPage: React.FunctionComponent<AcknowledgementsProps> = ({
  location,
}) => {
  return (
    <Layout location={location}>
      <Acknowledgements />
    </Layout>
  );
};

export default AcknowledgementsPage;
