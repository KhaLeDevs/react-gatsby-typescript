import React from 'react';

import Layout from '../components/Layout';
import Home from '@src/containers/Home';

interface HomePageProps {
  location: any;
}

const Index: React.FunctionComponent<HomePageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Home location={location} />
    </Layout>
  );
};

export default Index;
