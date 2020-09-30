import React from 'react';
import { Router } from '@reach/router';
import Welcome from '@src/containers/Welcome';

interface HomeProps {
  location?: Location;
}

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <Router>
      <Welcome path='/welcome' />
    </Router>
  );
};

export default Home;
