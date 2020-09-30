import React from 'react';
import Layout from '@src/components/Layout';
import Welcome from '@src/containers/Welcome';

interface WelcomePageProps {
  location: any;
}

const WelcomePage: React.FunctionComponent<WelcomePageProps> = ({
  location,
}) => {
  return (
    <Layout location={location}>
      <Welcome />
    </Layout>
  );
};

export default WelcomePage;
